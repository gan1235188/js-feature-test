import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  var fn = function(){}
  return fn.name
`

const validator: Validator = {
  name: 'functionName',
  test(content: any) {
    return runTest({
      type: TestType.checkResult,
      expression: testExpression,
      result: 'fn'
    })
  }
}

export default validator