import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  return /^.$/u.test('吉');
`

const validator: Validator = {
  name: 'unicodeRegex',
  test(content: any) {
    return runTest({
      type: TestType.checkResult,
      expression: testExpression,
      result: true
    })
  }
}

export default validator