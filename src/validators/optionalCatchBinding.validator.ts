import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = 'try{1}catch{}'

const name = 'optionalCatchBinding'
const validator: Validator = {
  name,
  test(content: any, done) {
    return runTest({
      done, name,
      type: TestType.expectNoWrong,
      expression: testExpression
    })
  }
}

export default validator