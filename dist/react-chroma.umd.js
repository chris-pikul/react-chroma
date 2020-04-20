(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global['react-chroma'] = {}));
}(this, (function (exports) { 'use strict';

    function hello(name) {
        console.log("Hello, " + name + "!");
    }

    function Example() {
        var someVariable = 5;
        console.log(Math.sqrt(someVariable));
    }

    exports.Example = Example;
    exports.Hello = hello;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=react-chroma.umd.js.map
