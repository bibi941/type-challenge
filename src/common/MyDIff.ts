{
  // 获取两个接口类型中的差值属性。

  type Foo = {
    a: string;
    b: number;
  }

  type Bar = {
    a: string;
    c: boolean
  }

  type Props = Record<string, unknown>

  type MyDiff<T extends Props, U extends Props> = Omit<T & U, keyof T & keyof U>
  
  type Result1 = MyDiff<Foo, Bar> // { b: number, c: boolean }
  type Result2 = MyDiff<Bar, Foo> // { b: number, c: boolean }

}