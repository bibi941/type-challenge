{
  // 在类型系统中实现类似于 Python 中 any 函数。类型接收一个数组，如果数组中任一个元素为真，则返回 true，否则返回 false。如果数组为空，返回 false。
  type falseType = 0 | '' | false | [] | Record<string, never>;

  type AnyOf<T extends unknown[]> = T extends [infer F, ...infer R] ?
    F extends falseType ? AnyOf<R> : true
    : false;

  type Sample1 = AnyOf<[1, '', false, [], {}]> // expected to be true.

  type Sample2 = AnyOf<[0, '', false, [], {}]> // expected to be false.
  
}