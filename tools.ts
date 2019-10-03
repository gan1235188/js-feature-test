export enum TestType {
    checkResult, //比较结果
    noWrong //没有错误
}

export type TestOption = {
    expression: string
    type?: TestType
    args?: any[]
    result?: any,
    resultCheckFn?: (expect: any, result: any) => boolean
}

const defaultTestOption = {
    expression: '',
    type: TestType.noWrong,
    args: [] as any,
    result: undefined as any,
    resultCheckFn: (expect: any, result: any) => expect === result
}

function getTestOpt(opt: TestOption) {
    return {
        ...defaultTestOption,
        ...opt
    }
}

export function runTest(testOpt: TestOption = defaultTestOption): boolean {
    const opt = getTestOpt(testOpt)
    if(opt.type === TestType.noWrong) {
        return testNoWrong(opt)
    } else {
        return testCheckResult(opt)
    }
    
}

function testNoWrong(opt: TestOption): boolean {    
    try{
        const fn = new Function(...opt.args, opt.expression)
        fn()
        return true
    }catch(e) {}

    return false
}

function testCheckResult(opt: TestOption): boolean {
    try{
        const fn = new Function(...opt.args, opt.expression)
        return opt.resultCheckFn(opt.resultCheckFn, fn())
    }catch(e) {}

    return false
}