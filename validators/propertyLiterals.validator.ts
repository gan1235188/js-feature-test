import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  return {
    default: 1
  }
`

const validator: Validator = {
  name: 'propertyLiterals',
  test(content: any) {
    return runTest({
      type: TestType.checkResult,
      expression: testExpression,
      resultCheckFn(expect) {
        return expect['default'] === 1
      }
    })
  }
}

export default validator