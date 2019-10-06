import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  function Foo() {
    return new.target
  }
  return Foo() === undefined && new Foo() === Foo
`

const name = 'newTarget'
export const validator: Validator = {
  name,
  test(content: any, done) {
    return runTest({
      done, name,
      description: 'https://www.babeljs.cn/docs/plugins',
      type: TestType.checkResult,
      expression: testExpression,
      expectResult: true
    })
  }
}
