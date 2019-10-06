import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  function Foo() {
    return new.target
  }
  return Foo() === undefined && new Foo() === Foo
`

const validator: Validator = {
  name: 'newTarget',
  test(content: any) {
    return runTest({
      type: TestType.checkResult,
      expression: testExpression,
      result: true
    })
  }
}

export default validator