import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  async function* a() {
    await 1;
    yield 2;
  }

  return a().next()
`

const validator: Validator = {
  name: 'asyncGeneratorFunctions',
  test(content: any) {
    return runTest({
      type: TestType.checkResult,
      expression: testExpression,
      async resultCheckFn(expect) {
        return (await expect).value === 2
      }
    })
  }
}

export default validator