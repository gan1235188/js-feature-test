import { runTest } from '../tools'
import { Validator, TestType } from './types'

const expression = `
    var obj = {}
    obj.default = 1
    return obj
`

const validator: Validator = {
  name: 'memberExpressionLiterals',
  test(content: any) {
    return runTest({
      expression,
      type: TestType.checkResult,
      resultCheckFn(expect) {
        return expect['default'] === 1
      }
    })
  }
}

export default validator
