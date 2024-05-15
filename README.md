### Generic Utility Library

This project is a TypeScript utility library that provides generic functions for array and object manipulation, demonstrating the versatility and type safety of TypeScript generics.

## Functions

### Identity Function

```typescript
function identity<T>(value: T): T
```

This generic function takes a value of type `T` and returns the same value.

### Array Reversal Function

```typescript
function reverseArray<T>(array: T[]): T[]
```

This generic function takes an array of elements of type `T` and returns a new array with the elements in reverse order.

### Object Mapper Function

```typescript
function mapObject<K extends string | number | symbol, V, U>(obj: Record<K, V>, mapFn: (value: V) => U): Record<K, U>
```

This generic function maps the values of an object to a new type using a mapping function. The keys remain the same, but the values are of a new type.

### Filtering Function

```typescript
function filterArray<T>(array: T[], predicate: (value: T) => boolean): T[]
```

This generic function filters elements of an array based on a predicate function that returns a boolean.

## Setup and Installation

1. **Clone the repository:**

```bash
git clone <https://github.com/el-riber/MOB2>
cd generic-utility-library
```

2. **Install dependencies:**

```bash
npm install
```

3. **Build the project:**

```bash
npm run build
```

4. **Run tests:**

```bash
npm run test
```

## Project Structure

- **src**: Contains the source TypeScript files.
  - `identity.ts`: Contains the identity function.
  - `reverseArray.ts`: Contains the array reversal function.
  - `mapObject.ts`: Contains the object mapper function.
  - `filterArray.ts`: Contains the filtering function.
- **test**: Contains the test files.
  - `test.ts`: Contains test cases for the functions.

## Example Usage

### Identity Function

```typescript
import { identity } from './src/identity';

console.log(identity<number>(1)); // Output: 1
console.log(identity<string>("hello")); // Output: "hello"
```

### Array Reversal Function

```typescript
import { reverseArray } from './src/reverseArray';

console.log(reverseArray<number>([1, 2, 3])); // Output: [3, 2, 1]
console.log(reverseArray<string>(["a", "b", "c"])); // Output: ["c", "b", "a"]
```

### Object Mapper Function

```typescript
import { mapObject } from './src/mapObject';

const obj = { a: 1, b: 2 };
const mappedObj = mapObject(obj, x => x.toString());
console.log(mappedObj); // Output: { a: "1", b: "2" }
```

### Filtering Function

```typescript
import { filterArray } from './src/filterArray';

const filteredArray = filterArray<number>([1, 2, 3, 4], x => x % 2 === 0);
console.log(filteredArray); // Output: [2, 4]
```

## License

This project is licensed under the ISC License.
