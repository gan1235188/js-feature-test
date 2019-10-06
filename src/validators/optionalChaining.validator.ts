import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  obj?.test?.name
`

const name = 'optionalChaining'
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
