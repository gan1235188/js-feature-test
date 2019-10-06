import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  return /./s.test('\\n')
`

const name = 'dotallRegex'
const validator: Validator = {
  name,
  test(content: any, done) {
    return runTest({
      done, name,
      type: TestType.checkResult,
      expression: testExpression,
      expectResult: true
    })
  }
}

export default validator