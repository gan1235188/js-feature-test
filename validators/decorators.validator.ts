import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  @annotation
  class MyClass { }

  function annotation(target) {
    target.annotated = true;
  }
`

const validator: Validator = {
  name: 'decorators',
  test(content: any) {
    return runTest({
      type: TestType.expectNoWrong,
      expression: testExpression
    })
  }
}

export default validator