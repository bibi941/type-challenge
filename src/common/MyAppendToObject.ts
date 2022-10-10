{
  // 实现一个为接口添加一个新字段的类型。该类型接收三个参数，返回带有新字段的接口类型。

  type MyAppendToObject<T extends Record<string, unknown>, U extends string, I extends unknown> = {
    [K in keyof T | U]: K extends U ? I : T[K]
  }

  type Test = { id: '1' }

  type Result = MyAppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }

}