import { TestOption, checkResult, iterator, featureTestConfig } from './validators/types';
export declare function setConfig(config: featureTestConfig): void;
export declare function getConfig(): featureTestConfig;
export declare function runTest(testOpt?: TestOption): checkResult;
export declare function output(str: string): void;
/**
 *
 * @param iterator
 * @param done
 *
 * var i = 0;
 * runIterator(function(next) {
 *  setTimeout(function() {
 *    console.log(i++)
 *    next(i < 10)
 *  }, 100)
 * }, done)
 */
export declare function runIterator(iterator: iterator, done: Function): void;
declare function checkResult(opt: TestOption): checkResult;
export {};
