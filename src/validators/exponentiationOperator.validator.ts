import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  return 2 ** 2
`

const name = 'exponentiationOperator'
export const validator: Validator = {
  name,
  test(content: any, done) {
    return runTest({
      done, name,
      description: 'https://www.babeljs.cn/docs/plugins',
      type: TestType.checkResult,
      expression: testExpression,
      expectResult: 4
    })
  }
}
