import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  var {x, y} = {x: 1, y:1};
  var [a, b, ...rest] = [1,2,3,4,5];
  return {x, y, a, b, rest}
`

const name = 'destructuring'
export const validator: Validator = {
  name,
  test(content: any, done) {
    return runTest({
      done, name,
      description: 'https://www.babeljs.cn/docs/plugins',
      type: TestType.checkResult,
      expression: testExpression,
      expectResult: {x:1, y:1, a:1, b: 2, rest: [3,4,5]}
    })
  }
}
