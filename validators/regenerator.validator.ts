import { runTest } from 'js-feature-test/tools'
import { Validator, TestType } from 'js-feature-test/validators/types'

const testExpression = `
  function* a() {
    yield 1;
  }
  a();
  async function b() {
    await 10
  }
  b();
`

const validator: Validator = {
  name: 'regenerator',
  test(content: any) {
    return runTest({
      expression: testExpression,
      type: TestType.expectNoWrong
    })
  }
}

export default validator
