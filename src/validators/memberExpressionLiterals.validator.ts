import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
    var obj = {}
    obj.default = 1
    return obj
`

const name = 'memberExpressionLiterals'
const validator: Validator = {
  name,
  test(content: any, done) {
    return runTest({
      done, name,
      expression: testExpression,
      type: TestType.checkResult,
      resultCheckFn(expect, { done }) {
        return done(expect['default'] === 1)
      }
    })
  }
}

export default validator
