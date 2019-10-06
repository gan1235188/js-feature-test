import {
  TestType,
  TestOption,
  checkResult,
  dynamicProperties,
  iterator,
  featureTestConfig
} from './validators/types'

let projectConfig: featureTestConfig = {
  isOutput: false
}

const defaultTestOption = {
  done: () => { },
  name: '',
  expression: '',
  type: TestType.expectNoWrong,
  resultCheckFn: (result: boolean, opt: TestOption) => {
    opt.done(result === opt.expectResult)
  }
}

export function setConfig(config: featureTestConfig) {
  projectConfig = {
    ...projectConfig,
    ...config
  }
}

export function getConfig(): featureTestConfig {
  return projectConfig
}

export function runTest(testOpt: TestOption = defaultTestOption): checkResult {
  let opt = getTestOpt(testOpt)

  if(getConfig().isOutput) {
    opt = outputHook(testOpt)
  }

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
/**
 * 
 * @param iterator 
 * @param done 
 * 
 * var i = 0;
 * runIterator(function(next) {
 *  setTimeout(function() {
 *    console.log(i++)
 *    next(i < 10)
 *  }, 100)
 * }, done)
 */
export function runIterator(iterator: iterator, done: Function) {
  iterator(next)

  function next() {
    runIterator(iterator, done)
  }
}

function outputHook(opt: TestOption): TestOption {
  const _done = opt.done

  opt.done = (result: boolean) => {
    showOutput(result)
    _done(result)
  }

  function showOutput(result: boolean) {
    output('=================================')
    output(`feature name: ${opt.name}`)
    output(`test result: ${result}`)
    output(`<pre>expression: ${opt.expression}</pre>`)
    output(`test type: ${opt.type}`)
    opt.resultCheckFn && output('result check fn: ')
    opt.resultCheckFn && output(`<pre>${opt.resultCheckFn}</pre>`)
    opt.expectResult && output(`exprect result: ${JSON.stringify(opt.expectResult)}`)
  }

  return opt
}

function getTestOpt(opt: TestOption): TestOption {
  return {
    ...defaultTestOption,
    ...opt
  }
}

function expectThrowError(opt: TestOption): checkResult {
  try {
    createFunction(opt.expression)()
    return opt.done(false)
  } catch (e) {
    return opt.done(true)
  }
}

function expectNoWrong(opt: TestOption): checkResult {
  try {
    createFunction(opt.expression)()
    return opt.done(true)
  } catch (e) { }

  return opt.done(false)
}


function checkResult(opt: TestOption): checkResult {
  try {
    const fn = createFunction(opt.expression)
    const result = fn()
    return opt.resultCheckFn(result, opt)
  } catch (e) { }

  return opt.done(false)
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

  if (typeof expect === 'object' && typeof result === 'object') {
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

  if (expectKeys.length !== resultKeys.length) return false

  return expectKeys.every((key) => isEqual(expect[key], result[key])) &&
    resultKeys.every((key) => isEqual(result[key], expect[key]))
}