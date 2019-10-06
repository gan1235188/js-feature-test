import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  var a = do {
    if(true) {
      'big';
    } else {
      'small';
    }
  };
`

const validator: Validator = {
  name: 'doExpressions',
  test(content: any) {
    return runTest({
      type: TestType.checkResult,
      expression: testExpression,
      result: 'big'
    })
  }
}

export default validator