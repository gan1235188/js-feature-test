import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
    var obj = {}
    obj.default = 1
    return obj
`

const name = 'memberExpressionLiterals'
export const validator: Validator = {
  name,
  test(content: any, done) {
    return runTest({
      done, name,
      description: 'https://www.babeljs.cn/docs/plugins',
      expression: testExpression,
      type: TestType.checkResult,
      resultCheckFn(expect, { done }) {
        return done(expect['default'] === 1)
      }
    })
  }
}

