{
  // Implement the type version of Array.join, Join<T, U> takes an Array T, string or number U and returns the Array T with U stitching up.
  type MyJoin<T extends string[], U extends string | number> = T extends [infer F extends string, ...infer R extends string[]] ?
    R['length'] extends 0 ? F : `${F}${U}${MyJoin<R, U>}` : never

  type Res = MyJoin<["a", "p", "p", "l", "e"], "-">; // expected to be 'a-p-p-l-e'
  type Res1 = MyJoin<["Hello", "World"], " ">; // expected to be 'Hello World'
  type Res2 = MyJoin<["2", "2", "2"], 1>; // expected to be '21212'
  type Res3 = MyJoin<["o"], "u">; // expected to be 'o'
}