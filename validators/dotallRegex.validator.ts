import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  return /./s.test('\n')
`

const validator: Validator = {
  name: 'dotallRegex',
  test(content: any) {
    return runTest({
      type: TestType.checkResult,
      expression: testExpression,
      result: true
    })
  }
}

export default validator