{
  // 实现一个接收string,number或bigInt类型参数的Absolute类型,返回一个正数字符串。

  type MyAbsolute<T extends string | number | bigint> = T extends `${infer First}${infer Rest}` ?
    First extends '-' ? Rest : `${First}${Rest}`
    : MyAbsolute<`${T}`>
    
  type Test = -100;

  type Result = MyAbsolute<Test>; // expected to be "100"

}