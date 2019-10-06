import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
var obj2 = {
  say () {
    return super.say() + "World!"
  }
}
`

const validator: Validator = {
  name: 'ObjectSuper',
  test(content: any) {
    return runTest({
      type: TestType.expectNoWrong,
      expression: testExpression
    })
  }
}

export default validator