import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
  var re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
  return re.exec("1999-02-29").groups.year
`

const name = 'namedCapturingGroupsRegex'
export const validator: Validator = {
  name,
  test(content: any, done) {
    return runTest({
      done, name,
      description: 'https://www.babeljs.cn/docs/plugins',
      type: TestType.checkResult,
      expression: testExpression,
      expectResult: '1999',
    })
  }
}
