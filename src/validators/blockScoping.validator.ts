import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  if(1) {
    const a = 1
  }

  a
`

const name = 'blockScoping'
export const validator: Validator = {
  name,
  test(content: any, done) {
    return runTest({
      done, name,
      description: 'https://www.babeljs.cn/docs/plugins',
      type: TestType.expectThrowError,
      expression: testExpression
    })
  }
}
