import promiseRetry = require("promise-retry"); // CommonJS/AMD module.
import {Promise} from "es6-promise";

export class MyLibrary {
    static addTogether(a: number, b: number): number {
        return a + b;
    }

    static usePromiseRetry(): void {
        // Promise typings come from "@types/es6-promise", but we'll get the implementation from a global polyfill
        // that must come from our parent project. This is admittedly a bad pattern, but we need the global polyfill
        // to satisfy promiseRetry() anyway, which expects to find Promise on the global scope.
        // ... Thus, although "@types/es6-promise" is a devDependency, we have no build dependency on "es6-promise".
        promiseRetry((retry: promiseRetry.RetryFn, attempt: number) => Promise.resolve());
    }
}