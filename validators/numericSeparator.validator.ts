import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  return 1_000
`

const validator: Validator = {
  name: 'numericSeparator',
  test(content: any) {
    return runTest({
      type: TestType.checkResult,
      expression: testExpression,
      result: 1000
    })
  }
}

export default validator