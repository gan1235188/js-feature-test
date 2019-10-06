import { runTest } from '../tools'
import { Validator, TestType } from './types'
import isEqual from 'lodash-es/isEqual'

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
      result: [3, 4],
      resultCheckFn: isEqual
    })
  }
}

export default validator