/*
  298 - Length of String
  -------
  by Pig Fang (@g-plane) #medium #template-literal

  ### Question

  Compute the length of a string literal, which behaves like `String#length`.

  > View on GitHub: https://tsch.js.org/298
*/

/* _____________ Your Code Here _____________ */

type LengthOfString<
  StringValue extends string,
  ArrayValue extends string[] = [],
  // Separate first Letter of the current word into two Types: FirstLetter and Rest
> = StringValue extends `${infer FirstLetter}${infer Rest}`
  ? // Recursively call with the Rest of the word, now it has -1 length in the StringValue and +1 length in the ArrayValue
    LengthOfString<Rest, [...ArrayValue, FirstLetter]>
  : // Will reach here when the StringValue will not extends the condition above, then will show the ArrayValue length
    ArrayValue['length'];

const test: LengthOfString<'okjadsl'> = '';
//      ^?

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/298/answer
  > View solutions: https://tsch.js.org/298/solutions
  > More Challenges: https://tsch.js.org
*/
