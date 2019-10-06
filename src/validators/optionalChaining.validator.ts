import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  obj?.test?.name
`

const validator: Validator = {
  name: 'optionalChaining',
  test(content: any) {
    return runTest({
      type: TestType.expectNoWrong,
      expression: testExpression
    })
  }
}

export default validator