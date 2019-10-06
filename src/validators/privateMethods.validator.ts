import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  class Counter {
    #xValue = 0;

    get #x() { return this.#xValue; }
    set #x(value) {
      this.#xValue = value;
    }

    #clicked() {
      this.#x++;
    }
  }
`

const name = 'privateMethods'
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
