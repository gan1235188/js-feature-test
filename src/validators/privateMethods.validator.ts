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

const validator: Validator = {
  name: 'privateMethods',
  test(content: any) {
    return runTest({
      type: TestType.expectNoWrong,
      expression: testExpression
    })
  }
}

export default validator