"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapObject = void 0;
/**
 * A generic function that maps the values of an object to a new type.
 * @param obj - An object with keys of type K and values of type V.
 * @param mapFn - A function that maps values of type V to type U.
 * @returns A new object with the same keys but values of type U.
 */
function mapObject(obj, mapFn) {
    const result = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = mapFn(obj[key]);
        }
    }
    return result;
}
exports.mapObject = mapObject;
