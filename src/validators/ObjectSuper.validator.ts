import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
var obj2 = {
  say () {
    return super.say() + "World!"
  }
}
`

const name = 'ObjectSuper'
export const validator: Validator = {
  name,
  test(content: any, done) {
    return runTest({
      done, name,
      description: 'https://www.babeljs.cn/docs/plugins',
      type: TestType.expectNoWrong,
      expression: testExpression
    })
  }
}
