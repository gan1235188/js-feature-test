export interface Validator {
  test: (content: any, done: (result: boolean) => void) => checkResult
  name: string
}

export enum TestType {
  checkResult = 'checkResult', //比较结果
  expectNoWrong = 'expectNoWrong', //没有错误
  expectThrowError = 'expectThrowError' //抛出错误
}

export type TestOption = {
  done: (result: boolean) => void
  name: string
  description?: string
  expression: string
  type?: TestType
  expectResult?: any
  resultCheckFn?: (expect: any, opt: TestOption) => checkResult
}

export type checkResult = boolean | void

export interface dynamicProperties {
  [key: string]: any
}

export type iterator = (next: Function) => any

export interface featureTestConfig {
  isOutput: boolean
}