import { runTest } from '../tools'
import { Validator, TestType } from './types'

const validator: Validator = {
  name: 'optionalCatchBinding',
  test(content: any) {
    return runTest({
      type: TestType.expectNoWrong,
      expression: 'try{1}catch{}'
    })
  }
}

export default validator