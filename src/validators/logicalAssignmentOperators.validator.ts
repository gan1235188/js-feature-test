import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  var a = 0 ||= 3;
  var b = 1 &&= 4;
  return [a, b]
`

const name = 'logicalAssignmentOperators'
const validator: Validator = {
  name,
  test(content: any, done) {
    return runTest({
      done, name,
      type: TestType.checkResult,
      expression: testExpression,
      expectResult: [3, 4]
    })
  }
}

export default validator