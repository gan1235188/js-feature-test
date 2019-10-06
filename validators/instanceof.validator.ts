import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  Symbol.hasInstance
`

const validator: Validator = {
  name: 'instanceof',
  test(content: any) {
    return runTest({
      type: TestType.expectNoWrong,
      expression: testExpression
    })
  }
}

export default validator