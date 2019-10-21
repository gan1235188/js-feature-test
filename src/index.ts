// import * as validators from './featureTest/index'
import { validators as featureTestValidators } from './validators/index'
import { Validator, checkResult, dynamicProperties, featureTestConfig } from './validators/types'
import { setConfig } from './tools'

export function featureTest(content: any, config: featureTestConfig, validators: Validator[], cb?: Function) {
  setConfig(config)
  validators = featureTestValidators.concat(validators || [])
  validators = uniqueValidators(validators)
  runValidators(content, validators, function (result: dynamicProperties, isDone: boolean) {
    cb && cb(result, isDone)
  })
}

function runValidators(content: any, validators: Validator[], cb: Function) {
  const featureTestResult: dynamicProperties = {}
  let counter = 1

  for (let i = 0; i < validators.length; i++) {
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
