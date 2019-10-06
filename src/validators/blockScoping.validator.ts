import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  if(1) {
    var a = 1
  }

  a
`

const name = 'blockScoping'
const validator: Validator = {
  name,
  test(content: any, done) {
    return runTest({
      done, name,
      type: TestType.expectThrowError,
      expression: testExpression
    })
  }
}

export default validator