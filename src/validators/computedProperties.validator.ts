import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  var key = 'key';
  var obj = {
    [key + 1]: 1
  }

  return obj.key1
`

const validator: Validator = {
  name: 'computedProperties',
  test(content: any) {
    return runTest({
      type: TestType.checkResult,
      expression: testExpression,
      result: 1
    })
  }
}

export default validator