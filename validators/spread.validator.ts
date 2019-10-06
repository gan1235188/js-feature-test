import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  var a = ['a', 'b', 'c'];
  var b = [...a, 'foo'];
  var c = foo(...a);
`

const validator: Validator = {
  name: 'spread',
  test(content: any) {
    return runTest({
      type: TestType.expectNoWrong,
      expression: testExpression
    })
  }
}

export default validator