import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  class A {
    a = 1
  }
`

const validator: Validator = {
  name: 'classProperties',
  test(content: any) {
    return runTest({
      type: TestType.expectNoWrong,
      expression: testExpression
    })
  }
}

export default validator