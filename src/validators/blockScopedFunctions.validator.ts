import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  if(1) {
    function a(){ return 1; }
  }
  
  a()
`

const name = 'blockScopedFunctions'
const validator: Validator = {
  name,
  test(content: any, done) {
    return runTest({
      done, name,
      type: TestType.expectThrowError,
      expression: testExpression
    })
  }
}

export default validator