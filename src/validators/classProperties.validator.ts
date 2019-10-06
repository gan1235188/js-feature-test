import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  class A {
    a = 1
  }
`

const name = 'classProperties'
const validator: Validator = {
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

export default validator