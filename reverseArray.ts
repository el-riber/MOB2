/**
 * A generic function that reverses the elements of an array.
 * @param array - An array of elements of type T.
 * @returns A new array with elements in reverse order.
 */
export function reverseArray<T>(array: T[]): T[] {
    return array.slice().reverse();
  }

  