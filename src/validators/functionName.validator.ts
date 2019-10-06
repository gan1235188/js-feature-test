import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  var fn = function(){}
  return fn.name
`

const name = 'functionName'
const validator: Validator = {
  name,
  test(content: any, done) {
    return runTest({
      done, name,
      type: TestType.checkResult,
      expression: testExpression,
      expectResult: 'fn'
    })
  }
}

export default validator