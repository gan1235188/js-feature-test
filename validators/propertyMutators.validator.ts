import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  var isCallSet = false
  var obj = {
    _a: '',
    set a(x) {
      isCallSet = true
      this._a = x
    },

    get a() {
      return 1
    }
  }

  obj.a = 2
  return isCallSet && obj.a
`

const validator: Validator = {
  name: 'propertyMutators',
  test(content: any) {
    return runTest({
      type: TestType.checkResult,
      expression: testExpression,
      result: 1
    })
  }
}

export default validator