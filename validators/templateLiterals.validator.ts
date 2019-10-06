import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = 'return `${1}`'

const validator: Validator = {
  name: 'templateLiterals',
  test(content: any) {
    return runTest({
      type: TestType.checkResult,
      expression: testExpression,
      result: '1'
    })
  }
}

export default validator