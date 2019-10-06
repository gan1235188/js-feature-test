import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  function add(x, y){ return x + y }
  var add1 = add(1, ?)
  return add1(1)
`

const name = 'partialApplication'
export const validator: Validator = {
  name,
  test(content: any, done) {
    return runTest({
      done, name,
      description: 'https://www.babeljs.cn/docs/plugins',
      type: TestType.checkResult,
      expression: testExpression,
      expectResult: 2
    })
  }
}
