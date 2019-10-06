import { runTest } from '../tools'
import { Validator, TestType } from './types'

const name = 'unicodePropertyRegex'
export const validator: Validator = {
  name,
  test(content: any, done) {
    return runTest({
      done, name,
      description: 'https://www.babeljs.cn/docs/plugins',
      type: TestType.expectNoWrong,
      //TODO: 如何测试
      expression: 'throw new Error("I don\'t know how to test it")'
    })
  }
}
