import { runTest } from '../tools'
import { Validator, TestType } from './types'

const validator: Validator = {
  name: 'arrowFunctions',
  test(content: any) {
    return runTest({
      type: TestType.expectNoWrong,
      expression: '()=>1'
    })
  }
}

export default validator