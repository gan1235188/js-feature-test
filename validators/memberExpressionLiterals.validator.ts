import { runTest, TestType } from '../tools'
import { Validator } from './types'

const validator: Validator = {
    name: 'memberExpressionLiterals',
    test(content: any): boolean {
        return runTest({
            expression: '(() => 1)()',
            type: TestType.noWrong
        })
    }
}

export default validator
