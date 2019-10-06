import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  return [0b11, 0o7, 'Hello\u{000A}\u{0009}!']
`

const validator: Validator = {
  name: 'literals',
  test(content: any) {
    return runTest({
      type: TestType.checkResult,
      expression: testExpression,
      result: [3, 7, 'Hello\n\t!']
    })
  }
}

export default validator