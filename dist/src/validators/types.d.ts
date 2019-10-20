export interface Validator {
    test: (content: any, done: (result: boolean) => void) => checkResult;
    name: string;
}
export declare enum TestType {
    checkResult = "checkResult",
    expectNoWrong = "expectNoWrong",
    expectThrowError = "expectThrowError"
}
export declare type TestOption = {
    done: (result: boolean) => void;
    name: string;
    description?: string;
    expression: string;
    type?: TestType;
    expectResult?: any;
    resultCheckFn?: (expect: any, opt: TestOption) => checkResult;
};
export declare type checkResult = boolean | void;
export interface dynamicProperties {
    [key: string]: any;
}
export declare type iterator = (next: Function) => any;
export interface featureTestConfig {
    isOutput: boolean;
}
