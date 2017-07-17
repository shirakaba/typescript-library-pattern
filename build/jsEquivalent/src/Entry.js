"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Entry_1 = require("../my-library/src/Entry");
require('es6-promise').polyfill(); // polyfills Promise globally (so that promise-retry can use it without having to import es6-promise itself.
// import {Promise} from "es6-promise";
var promiseRetry = require("promise-retry"); // CommonJS/AMD module.
/** Hacky way of getting Humax to wait for this external script to fully load before running initApp. */
try {
    console.log("Trying Promise.resolve()...");
    Promise.resolve(); // prove that a Promise implementation is globally available.
    console.log("Accessing MyLibrary.addTogether()...");
    Entry_1.MyLibrary.addTogether(1, 2);
    console.log("Calling promiseRetry() from our main project...");
    promiseRetry(function (retry, attempt) { return Promise.resolve(); });
    console.log("Calling promiseRetry() from our library...");
    Entry_1.MyLibrary.usePromiseRetry();
    console.log("All functionalities succeeded :)");
}
catch (e) {
    console.log("Error: " + e.message);
}
//# sourceMappingURL=Entry.js.map