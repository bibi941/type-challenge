// 实现一个通用Pop<T>，它接受一个数组T并返回一个没有最后一个元素的数组。
{

  type MyPop<T extends any[]> = T extends [...infer A, infer Last] ? A : never

  type arr1 = ['a', 'b', 'c', 'd']
  type arr2 = [3, 2, 1]

  type re1 = MyPop<arr1> // expected to be ['a', 'b', 'c']
  type re2 = MyPop<arr2> // expected to be [3, 2]
}