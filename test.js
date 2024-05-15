"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const identity_1 = require("../src/identity");
const reverseArray_1 = require("../src/reverseArray");
const mapObject_1 = require("../src/mapObject");
const filterArray_1 = require("../src/filterArray");
// Test cases for identity function
console.log((0, identity_1.identity)(1)); // Should print 1
console.log((0, identity_1.identity)("hello")); // Should print "hello"
// Test cases for reverseArray function
console.log((0, reverseArray_1.reverseArray)([1, 2, 3])); // Should print [3, 2, 1]
console.log((0, reverseArray_1.reverseArray)(["a", "b", "c"])); // Should print ["c", "b", "a"]
// Test cases for mapObject function
const obj = { a: 1, b: 2 };
const mappedObj = (0, mapObject_1.mapObject)(obj, x => x.toString());
console.log(mappedObj); // Should print { a: "1", b: "2" }
// Test cases for filterArray function
const filteredArray = (0, filterArray_1.filterArray)([1, 2, 3, 4], x => x % 2 === 0);
console.log(filteredArray); // Should print [2, 4]
