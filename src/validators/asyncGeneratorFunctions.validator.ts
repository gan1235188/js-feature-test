import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  async function* a() {
    await 1;
    yield 2;
  }

  return a().next()
`
const name = 'asyncGeneratorFunctions'
const validator: Validator = {
  name,
  test(content: any, done) {
    return runTest({
      done, name,
      type: TestType.checkResult,
      expression: testExpression,
      resultCheckFn(resultPromise) {
        try {
          resultPromise.then(function(result: any) {
            done(result && result.value === 2)
          })
        }catch(e) {
          done(false)
        }
      }
    })
  }
}

export default validator