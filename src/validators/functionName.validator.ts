import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  var fn = function(){}
  return fn.name
`

const name = 'functionName'
export const validator: Validator = {
  name,
  test(content: any, done) {
    return runTest({
      done, name,
      description: 'https://www.babeljs.cn/docs/plugins',
      type: TestType.checkResult,
      expression: testExpression,
      expectResult: 'fn'
    })
  }
}
