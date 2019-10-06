import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  if(1) {
    function a(){ return 1; }
  }
  
  a()
`

const validator: Validator = {
  name: 'blockScopedFunctions',
  test(content: any) {
    return runTest({
      type: TestType.expectThrowError,
      expression: testExpression
    })
  }
}

export default validator