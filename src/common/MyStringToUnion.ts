{
  // 实现一个将接收到的String参数转换为一个字母Union的类型。

  type Test = '123';

  type MyStringToUnion<T extends string> = T extends `${infer F}${infer R}` ? F | MyStringToUnion<R>
    : never

  type Result = MyStringToUnion<Test>; // expected to be "1" | "2" | "3"

}
