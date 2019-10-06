import { runTest } from '../tools'
import { Validator, TestType } from './types'

const validator: Validator = {
  name: 'functionBind',
  test(content: any) {
      return runTest({
          type: TestType.expectNoWrong,
          expression: `{}::()=>{}`
      })
  }
}

export default validator