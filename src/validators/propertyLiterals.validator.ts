import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  return {
    default: 1
  }
`

const name = 'propertyLiterals'
export const validator: Validator = {
  name,
  test(content: any, done) {
    return runTest({
      done, name,
      description: 'https://www.babeljs.cn/docs/plugins',
      type: TestType.checkResult,
      expression: testExpression,
      resultCheckFn(expect) {
        return expect['default'] === 1
      }
    })
  }
}
