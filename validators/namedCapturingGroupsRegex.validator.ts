import { runTest } from '../tools'
import { Validator, TestType } from './types'

const testExpression = `
var re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
return re.exec("1999-02-29").groups.year
`

const validator: Validator = {
  name: 'namedCapturingGroupsRegex',
  test(content: any) {
    return runTest({
      type: TestType.checkResult,
      expression: testExpression,
      result: '1999',
    })
  }
}

export default validator