import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  var a = /o+/y;
`

const validator: Validator = {
  name: 'stickyRegex',
  test(content: any) {
    return runTest({
      type: TestType.expectNoWrong,
      expression: testExpression
    })
  }
}

export default validator