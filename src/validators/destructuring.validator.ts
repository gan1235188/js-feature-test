import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  var {x, y} = {x: 1, y:1};
  var [a, b, ...rest] = [1,2,3,4,5];
  return {x, y, a, b, rest}
`

const validator: Validator = {
  name: 'destructuring',
  test(content: any) {
    return runTest({
      type: TestType.checkResult,
      expression: testExpression,
      result: {x:1, y:1, a:1, b: 2, rest: [3,4,5]}
    })
  }
}

export default validator