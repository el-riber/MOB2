"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterArray = void 0;
/**
 * A generic function that filters elements of an array based on a predicate function.
 * @param array - An array of elements of type T.
 * @param predicate - A function that returns a boolean for each element of type T.
 * @returns A new array with elements that satisfy the predicate function.
 */
function filterArray(array, predicate) {
    return array.filter(predicate);
}
exports.filterArray = filterArray;
