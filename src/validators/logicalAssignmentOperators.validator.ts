import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  var a = 0 ||= 3;
  var b = 1 &&= 4;
  return [a, b]
`

const validator: Validator = {
  name: 'logicalAssignmentOperators',
  test(content: any) {
    return runTest({
      type: TestType.checkResult,
      expression: testExpression,
      result: [3, 4]
    })
  }
}

export default validator