import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  function *a() {
    return function.sent
  }

  return a().next(1)
`

const validator: Validator = {
  name: 'functionSent',
  test(content: any) {
    return runTest({
      type: TestType.checkResult,
      expression: testExpression,
      result: 1
    })
  }
}

export default validator