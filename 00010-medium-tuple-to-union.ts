// ============= Test Cases =============
import type { Equal, Expect } from '../test-utils';

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>
];

// ============= Your Code Here =============
// first solution
// type TupleToUnion<T> = T[keyof T extends number ? keyof T : never];

// alternate mapping approach
// type TupleToUnion<T> = T extends [infer First, ...infer Rest]
//   ? First | TupleToUnion<Rest>
//   : never;

// simple and effective
type TupleToUnion<T extends any[]> = T[number];
