import { runTest } from '../tools'
import { Validator, TestType } from './types'

const name = 'unicodePropertyRegex'
const validator: Validator = {
  name,
  test(content: any, done) {
    return runTest({
      done, name,
      type: TestType.expectNoWrong,
      //TODO: 如何测试
      expression: 'throw new Error("I don\'t know how to test it")'
    })
  }
}

export default validator