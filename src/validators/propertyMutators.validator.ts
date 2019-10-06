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

const name = 'propertyMutators'
export const validator: Validator = {
  name,
  test(content: any, done) {
    return runTest({
      done, name,
      description: 'https://www.babeljs.cn/docs/plugins',
      type: TestType.checkResult,
      expression: testExpression,
      expectResult: 1
    })
  }
}
