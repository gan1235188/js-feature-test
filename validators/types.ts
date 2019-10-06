export interface Validator {
  test: (content: any) => boolean | Promise<boolean>
  name: string
}

export enum TestType {
  checkResult, //比较结果
  expectNoWrong, //没有错误
  expectThrowError //抛出错误
}

export type TestOption = {
  expression: string
  type?: TestType
  args?: any[]
  result?: any,
  resultCheckFn?: (expect: any, result: any) => boolean | Promise<boolean>
}

export type checkResult = boolean | Promise<boolean>