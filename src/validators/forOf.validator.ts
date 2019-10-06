import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  for(var i of []){}
`

const validator: Validator = {
  name: 'forOf',
  test(content: any) {
    return runTest({
      type: TestType.expectNoWrong,
      expression: testExpression
    })
  }
}

export default validator