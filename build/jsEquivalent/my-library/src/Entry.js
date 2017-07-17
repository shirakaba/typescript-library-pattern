"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promiseRetry = require("promise-retry"); // CommonJS/AMD module.
var es6_promise_1 = require("es6-promise");
var MyLibrary = (function () {
    function MyLibrary() {
    }
    MyLibrary.addTogether = function (a, b) {
        return a + b;
    };
    MyLibrary.usePromiseRetry = function () {
        // Promise typings come from "@types/es6-promise", but we'll get the implementation from a global polyfill
        // that must come from our parent project. This is admittedly a bad pattern, but we need the global polyfill
        // to satisfy promiseRetry() anyway, which expects to find Promise on the global scope.
        // ... Thus, although "@types/es6-promise" is a devDependency, we have no build dependency on "es6-promise".
        promiseRetry(function (retry, attempt) { return es6_promise_1.Promise.resolve(); });
    };
    return MyLibrary;
}());
exports.MyLibrary = MyLibrary;
//# sourceMappingURL=Entry.js.map