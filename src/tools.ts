import { TestType, TestOption, checkResult, dynamicProperties } from './validators/types'

const defaultTestOption = {
  expression: '',
  type: TestType.expectNoWrong,
  result: undefined as any,
  resultCheckFn: isEqual
}

export function runTest(testOpt: TestOption = defaultTestOption): checkResult {
  const opt = getTestOpt(testOpt)

  output(`<pre>expression: ${testOpt.expression}</pre>`)
  output(`type: ${testOpt.type.toString()}`)

  switch (opt.type) {
    case TestType.expectNoWrong:
      return expectNoWrong(opt)
    case TestType.checkResult:
      return checkResult(opt)
    case TestType.expectThrowError:
      return expectThrowError(opt)
    default:
      return expectNoWrong(opt)
  }
}

export function output(str: string) {
  document.write(`<p>${str}</p>`)
}

function getTestOpt(opt: TestOption) {
  return {
    ...defaultTestOption,
    ...opt
  }
}

function expectThrowError(opt: TestOption): checkResult {
  try {
    createFunction(opt.expression)()
    return false
  } catch (e) {
    return true
  }
}

function expectNoWrong(opt: TestOption): checkResult {
  try {
    createFunction(opt.expression)()
    return true
  } catch (e) { }

  return false
}


function checkResult(opt: TestOption): checkResult {
  try {
    const fn = createFunction(opt.expression)
    const result = fn()
    output(`expect result: ${JSON.stringify(opt.result)}, result: ${JSON.stringify(result)}`)
    return opt.resultCheckFn(result, opt.result)
  } catch (e) { }

  return false
}

function createFunction(body: string) {
  return new Function(body)
}

function isEqual(expect: any, result: any): boolean {
  if (expect === result) return true
  if (expect !== expect && result !== result) return true

  if (Array.isArray(expect) && Array.isArray(result)) {
    return isEqualArray(expect, result)
  }

  if(typeof expect === 'object' && typeof result === 'object') {
    return isEqualObject(expect, result)
  }

  return false
}

function isEqualArray(expect: any[], result: any[]): boolean {
  if (expect.length !== result.length) return false
  return expect.every((item, index) => isEqual(item, result[index])) && 
    result.every((item, index) => isEqual(item, expect[index]))
}

function isEqualObject(expect: dynamicProperties, result: dynamicProperties) {
  const expectKeys = Object.keys(expect)
  const resultKeys = Object.keys(result)

  if(expectKeys.length !== resultKeys.length) return false

  return expectKeys.every((key) => isEqual(expect[key], result[key])) && 
  resultKeys.every((key) => isEqual(result[key], expect[key])) 
}