// 实现泛型TupleToUnion<T>，它返回元组所有值的合集。

{
  type Arr = ['1', '2', '3']


  type MyTupleToUnion<T extends any[]> = T[number]


  type Test = MyTupleToUnion<Arr> // expected to be '1' | '2' | '3'
}