import { runTest } from '../tools'
import { Validator, TestType } from './types'

const validator: Validator = {
  name: 'typeofSymbol',
  test(content: any) {
      return runTest({
          type: TestType.checkResult,
          expression: `return typeof Symbol === 'symbol'`,
          result: true
      })
  }
}

export default validator