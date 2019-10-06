import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  function a(x = 1) {}
  function b({x}){}
  function c(...x){}
`

const name = 'parameters'
const validator: Validator = {
  name,
  test(content: any, done) {
    return runTest({
      done, name,
      type: TestType.expectNoWrong,
      expression: testExpression
    })
  }
}

export default validator