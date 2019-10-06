import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  if(1) {
    var a = 1
  }

  a
`

const validator: Validator = {
  name: 'blockScoping',
  test(content: any) {
    return runTest({
      type: TestType.expectThrowError,
      expression: testExpression
    })
  }
}

export default validator