import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  var a = ['a', 'b', 'c'];
  var b = [...a, 'foo'];
`

const name = 'spread'
export const validator: Validator = {
  name,
  test(content: any, done) {
    return runTest({
      done, name,
      description: 'https://www.babeljs.cn/docs/plugins',
      type: TestType.expectNoWrong,
      expression: testExpression
    })
  }
}
