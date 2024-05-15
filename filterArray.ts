/**
 * A generic function that filters elements of an array based on a predicate function.
 * @param array - An array of elements of type T.
 * @param predicate - A function that returns a boolean for each element of type T.
 * @returns A new array with elements that satisfy the predicate function.
 */
export function filterArray<T>(array: T[], predicate: (value: T) => boolean): T[] {
    return array.filter(predicate);
  }
  