import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  function add(x, y){ return x + y }
  var add1 = add(1, ?)
  return add1(1)
`

const validator: Validator = {
  name: 'partialApplication',
  test(content: any) {
    return runTest({
      type: TestType.checkResult,
      expression: testExpression,
      result: 2
    })
  }
}

export default validator