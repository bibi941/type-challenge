// 实现内置类型Record

{

  type MyRecord<T extends keyof any, U> = {
    [K in T]: U
  }



  type Eg1 = MyRecord<'a' | 'b', { key1: string }>
  //  except
  // type Eg1 = {
  //   a: { key1: string; };
  //   b: { key1: string; };
  // }


}