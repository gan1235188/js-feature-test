import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  return 2 ** 2
`

const name = 'exponentiationOperator'
const validator: Validator = {
  name,
  test(content: any, done) {
    return runTest({
      done, name,
      type: TestType.checkResult,
      expression: testExpression,
      expectResult: 4
    })
  }
}

export default validator