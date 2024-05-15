import { identity } from "../src/identity";
import { reverseArray } from "../src/reverseArray";
import { mapObject } from "../src/mapObject";
import { filterArray } from "../src/filterArray";

// Test cases for identity function
console.log(identity<number>(1)); // Should print 1
console.log(identity<string>("hello")); // Should print "hello"

// Test cases for reverseArray function
console.log(reverseArray<number>([1, 2, 3])); // Should print [3, 2, 1]
console.log(reverseArray<string>(["a", "b", "c"])); // Should print ["c", "b", "a"]

// Test cases for mapObject function
const obj = { a: 1, b: 2 };
const mappedObj = mapObject(obj, x => x.toString());
console.log(mappedObj); // Should print { a: "1", b: "2" }

// Test cases for filterArray function
const filteredArray = filterArray<number>([1, 2, 3, 4], x => x % 2 === 0);
console.log(filteredArray); // Should print [2, 4]
