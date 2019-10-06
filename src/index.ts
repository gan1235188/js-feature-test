// import * as validators from './featureTest/index'
import featureTestValidators from './validators/index'
import { Validator, TestType } from './validators/types'
import { runTest, output } from './tools'

interface dynamicProperty {
  [key: string]: any
}

interface FeatureTestOptions {
  validators: Validator[]
}

// demo
const myValidators: Validator[] = [
  // {
  //   name: 'functionBind',
  //   test(content: any) {
  //     return runTest({
  //       type: TestType.expectNoWrong,
  //       expression: `{}::()=>{}`
  //     })
  //   }
  // }
]
featureTest({}, { validators: myValidators })

async function featureTest(content: any, options: FeatureTestOptions) {
  let validators = options ? options.validators || [] : []
  validators = featureTestValidators.concat(validators)
  validators = uniqueValidators(validators)

  const testResult = await runValidators(content, validators)

  setCookie('jsFeatureTest', JSON.stringify(testResult), new Date('2022-10-1'), '/')
  return testResult
}

function setCookie(name: string, value: string, expires: Date, path: string) {
  document.cookie = `${name}=${value};expires=${expires};path=${path}`
}

function getAllCookie() {
  const cookieMap: dynamicProperty = {}
  const cookieList = document.cookie.split(';')
  cookieList.forEach((cookie) => {
    const [name, value] = cookie.split('=')
    name && (cookieMap[name] = value)
  })

  return cookieMap
}

async function runValidators(content: any, validators: Validator[]) {
  const featureTestResult: dynamicProperty = {}

  for (let i = 0; i < validators.length; i++) {
    await validatorInvoke(validators[i], featureTestResult, content)
  }

  return featureTestResult
}

async function validatorInvoke({ name, test }: Validator, featureTestResult: dynamicProperty, content: any) {
  const testResult = await test(content)

  output(`${name}: ${testResult}`)
  output('=================================')

  featureTestResult[name] = testResult
  return testResult
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
