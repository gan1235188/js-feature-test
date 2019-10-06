import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  return 1 || throw new Error('error')
`

const name = 'throwExpressions'
const validator: Validator = {
  name,
  test(content: any, done) {
    return runTest({
      done, name,
      type: TestType.checkResult,
      expression: testExpression,
      expectResult: 1
    })
  }
}

export default validator