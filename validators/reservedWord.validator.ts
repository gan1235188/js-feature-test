import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  var abstract = 1;
  return abstract;
`

const validator: Validator = {
  name: 'reservedWord',
  test(content: any) {
    return runTest({
      type: TestType.checkResult,
      expression: testExpression,
      result: 1
    })
  }
}

export default validator