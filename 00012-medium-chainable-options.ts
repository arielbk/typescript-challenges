// ============= Test Cases =============
import type { Alike, Expect } from './test-utils';

declare const a: Chainable;

const result1 = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get();

const result2 = a
  .option('name', 'another name')
  // @ts-expect-error
  .option('name', 'last name')
  .get();

type cases = [
  Expect<Alike<typeof result1, Expected1>>,
  Expect<Alike<typeof result2, Expected2>>
];

type Expected1 = {
  foo: number;
  bar: {
    value: string;
  };
  name: string;
};

type Expected2 = {
  name: string;
};

// ============= Your Code Here =============
type Chainable<Constructed = {}> = {
  option<Key extends string, Value>(
    // throw error for duplicate keys
    key: Key extends keyof Constructed ? never : Key,
    value: Value
    // recursion type with a new constructed record on every iteration
  ): Chainable<Constructed & Record<Key, Value>>;
  get(): Constructed;
};
