import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  function add(x){
    return function(y){
      return x + y
    }
  }

  return 1 |> add(1)
`

const validator: Validator = {
  name: 'pipelineOperator',
  test(content: any) {
    return runTest({
      type: TestType.checkResult,
      expression: testExpression,
      result: 2
    })
  }
}

export default validator