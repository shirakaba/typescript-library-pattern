// Type definitions for promise-retry 1.1.1
// Project: https://github.com/IndigoUnited/node-promise-retry
// Definitions by: Jamie Birch <https://www.github.com/shirakaba/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Created by jwork on 07/07/2017.
 */

declare module "promise-retry" { // <--- if this is not in `node_modules/@types`, you should provide its module name

    export = promiseRetry;

    function promiseRetry(options: Partial<promiseRetry.NodeRetryOptions>, fn: (retry: promiseRetry.RetryFn, attempt: number) => Promise<any>): Promise<any>;
    function promiseRetry(fn: (retry: promiseRetry.RetryFn, attempt: number) => Promise<any>, options ?: Partial<promiseRetry.NodeRetryOptions>): Promise<any>;

    namespace promiseRetry { // <--- if you want to merge namespace, you should use the same name
        
        export interface NodeRetryOptions {
            forever: boolean;
            unref: boolean;
            retries: number;
            factor: number;
            minTimeout: number;
            maxTimeout: number;
            randomize: number | false;
        }

        export type RetryFn = (err: any) => never;
    }
}