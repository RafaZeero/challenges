/*
  4182 - Fibonacci Sequence
  -------
  by windliang (@wind-liang) #medium

  ### Question

  Implement a generic `Fibonacci<T>` that takes a number `T` and returns its corresponding [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number).

  The sequence starts:
  1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

  For example
  ```ts
  type Result1 = Fibonacci<3> // 2
  type Result2 = Fibonacci<8> // 21
  ```

  > View on GitHub: https://tsch.js.org/4182
*/

/* _____________ Your Code Here _____________ */

type Length<Tuple extends number[]> = Tuple['length'];

type BuildTuple<Length extends number, Tuple extends any[] = []> = Tuple['length'] extends Length
  ? Tuple
  : BuildTuple<Length, [...Tuple, any]>;

type Add<FirstNumber extends number, SecondNumber extends number> = Length<
  [...BuildTuple<FirstNumber>, ...BuildTuple<SecondNumber>]
>;

type FibonacciRes<
  T extends number,
  CurrentIndex extends any[] = [1],
  Prev extends any[] = [],
  Current extends any[] = [1]
> = CurrentIndex['length'] extends T
  ? Current['length']
  : FibonacciRes<T, [...CurrentIndex, 1], Current, [...Prev, ...Current]>;

type Fibonacci<T extends number> = Length<BuildTuple<T>>;

const test: FibonacciRes<5> = '';
//      ^?

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<FibonacciRes<1>, 1>>,
  Expect<Equal<FibonacciRes<2>, 1>>,
  Expect<Equal<FibonacciRes<3>, 2>>,
  Expect<Equal<FibonacciRes<8>, 21>>
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4182/answer
  > View solutions: https://tsch.js.org/4182/solutions
  > More Challenges: https://tsch.js.org
*/
