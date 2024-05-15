"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseArray = void 0;
/**
 * A generic function that reverses the elements of an array.
 * @param array - An array of elements of type T.
 * @returns A new array with elements in reverse order.
 */
function reverseArray(array) {
    return array.slice().reverse();
}
exports.reverseArray = reverseArray;
