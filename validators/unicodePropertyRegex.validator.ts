import { runTest } from 'js-feature-test/tools'
import { Validator, TestType } from 'js-feature-test/validators/types'

const validator: Validator = {
  name: 'unicodePropertyRegex',
  test(content: any) {
    return runTest({
      type: TestType.expectNoWrong,
      //TODO: 如何测试
      expression: 'throw new Error("I don\'t know how to test it")'
    })
  }
}

export default validator