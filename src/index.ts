// import * as validators from './featureTest/index'
import { validators as featureTestValidators } from './validators/index'
import { Validator, checkResult, dynamicProperties, featureTestConfig } from './validators/types'
import { setConfig } from './tools'

const params = getSearchParams()
featureTest({}, { isOutput: true}, null, (testResult: boolean, isDone: boolean) => {
  const expires = new Date().getTime() + 1000 * 60 * 60 * 24 * 15
  setCookie('jsFeatureTest', JSON.stringify(testResult), expires, '/')

  if(params.back && isDone) {
    location.href = params.back
  }
})

export function featureTest(content: any, config: featureTestConfig, validators: Validator[], cb?: Function) {
  setConfig(config)
  validators = featureTestValidators.concat(validators || [])
  validators = uniqueValidators(validators)
  runValidators(content, validators, function(result: dynamicProperties, isDone: boolean) {
    cb && cb(result, isDone)
  })
}

function getSearchParams() {
  const search = location.search.slice(1)
  const paramList = decodeURIComponent(search).split('&')
  const result: dynamicProperties = {}
  for(var i = paramList.length - 1; i >= 0; i--) {
    const param = paramList[i].split('=')
    result[param[0]] = param[1]
  }

  return result
}

function setCookie(name: string, value: string, expires: Date | number, path: string) {
  document.cookie = `${name}=${value};expires=${new Date(expires).getTime()};path=${path}`
}

function runValidators(content: any, validators: Validator[], cb: Function) {
  const featureTestResult: dynamicProperties = {}
  let counter = 1

  for(let i = 0; i < validators.length; i++) {
    validatorInvoke(validators[i], featureTestResult, done, content)
  }

  function done() {
    cb(featureTestResult, ++counter >= validators.length)
  }
}

function validatorInvoke({ name, test }: Validator, featureTestResult: dynamicProperties, cb: Function, content: any) {
  test(content, done)

  function done(result: checkResult) {
    featureTestResult[name] = result
    cb(result)
  }
}

function uniqueValidators(validators: Validator[]): Validator[] {
  const result: Validator[] = []

  validators.map(validator => {
    if (!find(result, (item) => item.name === validator.name)) {
      result.push(validator)
    }
  })

  return result
}

function find(arr: any[], fn: (item: any) => boolean): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      return true
    }
  }

  return false
}
