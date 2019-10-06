import { TestType, TestOption, checkResult } from './validators/types'

const defaultTestOption = {
  expression: '',
  type: TestType.expectNoWrong,
  result: undefined as any,
  resultCheckFn: (expect: any, result: any) => expect === result
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
    return opt.resultCheckFn(fn(), opt.result)
  } catch (e) { }

  return false
}

function createFunction(body: string) {
  return new Function(body)
}

export function output(str: string) {
  document.write(`<p>${str}</p>`)
}