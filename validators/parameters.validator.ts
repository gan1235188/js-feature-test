import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  function a(x = 1) {}
  function b({x}){}
  function c(...x){}
`

const validator: Validator = {
  name: 'parameters',
  test(content: any) {
    return runTest({
      type: TestType.expectNoWrong,
      expression: testExpression
    })
  }
}

export default validator