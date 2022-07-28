// 实现一个 IF 类型，它接收一个条件类型 C ，一个判断为真时的返回类型 T ，以及一个判断为假时的返回类型 F。 C 只能是 true 或者 false， T 和 F 可以是任意类型。

{

  type MyIf<B extends boolean, T, Y> = B extends true ? T : Y

  type A = MyIf<true, 'a', 'b'>  // expected to be 'a'
  type B = MyIf<false, 'a', 'b'> // expected to be 'b'
}