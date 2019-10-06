import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  var key = 'key';
  var obj = {
    [key + 1]: 1
  }

  return obj.key1
`

const name = 'computedProperties'
export const validator: Validator = {
  name,
  test(content: any, done) {
    return runTest({
      done, name,
      description: 'https://www.babeljs.cn/docs/plugins',
      type: TestType.checkResult,
      expression: testExpression,
      expectResult: 1
    })
  }
}
