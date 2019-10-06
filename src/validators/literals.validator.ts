import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  return [0b11, 0o7, 'Hello\\u{000A}\\u{0009}!']
`

const name = 'literals'
export const validator: Validator = {
  name,
  test(content: any, done) {
    return runTest({
      done, name,
      description: 'https://www.babeljs.cn/docs/plugins',
      type: TestType.checkResult,
      expression: testExpression,
      expectResult: [3, 7, 'Hello\n\t!']
    })
  }
}
