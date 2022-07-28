// 在类型系统里实现通用的 Array.push 。


{

  type MyPush<T extends any[], U> = [...T, U]

  type Result = MyPush<[1, 2], '3'> // [1, 2, '3']
}