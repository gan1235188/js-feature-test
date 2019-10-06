import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  class A {
    a() { return 1; }
  }

  class B extends A {
    b() { return 2;}
  }

  var b = new B()
  return b.b()
`

const validator: Validator = {
  name: 'classes',
  test(content: any) {
    return runTest({
      type: TestType.checkResult,
      expression: testExpression,
      result: 2
    })
  }
}

export default validator