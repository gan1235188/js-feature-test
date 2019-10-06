import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  return /^.$/u.test('😄');
`

const name = 'unicodeRegex'
export const validator: Validator = {
  name,
  test(content: any, done) {
    return runTest({
      done, name,
      description: 'https://www.babeljs.cn/docs/plugins',
      type: TestType.checkResult,
      expression: testExpression,
      expectResult: true
    })
  }
}
