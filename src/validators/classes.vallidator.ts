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

const name = 'classes'
const validator: Validator = {
  name,
  test(content: any, done) {
    return runTest({
      done, name,
      type: TestType.checkResult,
      expression: testExpression,
      expectResult: 2
    })
  }
}

export default validator