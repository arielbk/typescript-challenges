// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>
];

// ============= Your Code Here =============
type Pop<T extends any[]> = T extends [...infer Rest, any] ? Rest : never;

type Shift<T extends any[]> = T extends [any, ...infer Rest] ? Rest : never;
type ShiftTest = Shift<[3, 2, 1]>;

type Push<T extends any[], P = never> = T extends [...infer Rest]
  ? [...Rest, P]
  : never;
type PushTest = Push<[3, 2, 1], 0>;

type Unshift<T extends any[], P = never> = T extends [...infer Rest]
  ? [P, ...Rest]
  : never;
type UnshiftTest = Unshift<[3, 2, 1], 4>;
