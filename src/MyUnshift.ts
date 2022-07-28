// 实现类型版本的 Array.unshift。


{
  type MyUnshift<T extends unknown[], U> = [U, ...T]

  type Result = MyUnshift<[1, 2], 0> // [0, 1, 2,]
}