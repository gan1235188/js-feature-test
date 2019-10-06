import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  async function a(){ await 1 }
`

const validator: Validator = {
  name: 'asyncToGenerator',
  test(content: any) {
    return runTest({
      type: TestType.expectNoWrong,
      expression: testExpression
    })
  }
}

export default validator