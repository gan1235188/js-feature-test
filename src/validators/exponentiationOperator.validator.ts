import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  return 2 ** 2
`

const validator: Validator = {
  name: 'exponentiationOperator',
  test(content: any) {
    return runTest({
      type: TestType.checkResult,
      expression: testExpression,
      result: 4
    })
  }
}

export default validator