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

const name = 'pipelineOperator'
export const validator: Validator = {
  name,
  test(content: any, done) {
    return runTest({
      done, name,
      description: 'https://www.babeljs.cn/docs/plugins',
      type: TestType.checkResult,
      expression: testExpression,
      expectResult: 2
    })
  }
}
