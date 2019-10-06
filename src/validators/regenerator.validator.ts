import { runTest } from '../tools'
import { Validator, TestType } from './types'

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

const name = 'regenerator'
export const validator: Validator = {
  name,
  test(content: any, done) {
    return runTest({
      done, name,
      description: 'https://www.babeljs.cn/docs/plugins',
      expression: testExpression,
      type: TestType.expectNoWrong
    })
  }
}

