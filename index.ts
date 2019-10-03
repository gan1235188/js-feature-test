// import * as validators from './featureTest/index'
import featureTestValidators from './validators/index'
import { Validator } from './validators/types'
import { runTest as runValidator, TestType } from './tools'

interface dynamicProperty {
    [key: string]: any
}

interface FeatureTestOptions {
    validators: Validator[]
}

// demo
const myValidators: Validator[] = [
    {
        name: 'functionBind',
        test(content: any) {
            return runValidator({
                type: TestType.noWrong,
                expression: `{}::()=>{}`
            })
        }
    }
]
featureTest({}, { validators: myValidators })

function featureTest(content: any, options: FeatureTestOptions) {
    let validators = options ? options.validators || [] : []
    validators = featureTestValidators.concat(validators)
    validators = uniqueValidators(validators)

    const testResult = runTest(content, validators)
    
    setCookie('jsFeatureTest', JSON.stringify(testResult), new Date('2022-10-1'), '/')
    return testResult
}

function setCookie(name: string, value: string, expires: Date, path: string) {
    document.cookie = `${name}=${value};expires=${expires};path=${path}`
}

function getAllCookie() {
    const cookieMap: dynamicProperty = {}
    const cookieList = document.cookie.split(';')
    cookieList.forEach((cookie) => {
        const [name, value] = cookie.split('=')
        name && (cookieMap[name] = value)
    })

    return cookieMap
}

function runTest(content: any, validators: Validator[]) {
    const featureTestResult: dynamicProperty = {}

    validators.forEach(({name, test}) => {
        const testResult = test(content)
        console.log(`${name}: ${testResult}`)
        featureTestResult[name] = testResult ? 1 : 0
    })

    return featureTestResult
}

function uniqueValidators(validators: Validator[]): Validator[] {
    const result: Validator[] = []

    validators.map(validator => {
        if(!find(result, (item) => item.name === validator.name)) {
            result.push(validator)
        }
    })

    return result
}

function find(arr: any[], fn: (item: any) => boolean): boolean {
    for(let i = 0; i < arr.length; i++) {
        if(fn(arr[i])) {
            return true
        }
    }

    return false
}


// function uniqueValidators__TEST() {
//     const result = uniqueValidators([
//         {
//             name: '1',
//             test: () => true
//         },
//         {
//             name: '1',
//             test: () => true
//         }
//     ])

//     console.log(result)
// }

// uniqueValidators__TEST() //right

// import config from './transformConfig'

// const transform = require('@babel/core').transform
// const plugins = Object.entries(config)

// transform()
