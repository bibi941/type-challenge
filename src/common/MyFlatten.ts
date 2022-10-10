{
  // 在这个挑战中，你需要写一个接受数组的类型，并且返回扁平化的数组类型。

  type MyFlatten<T extends unknown[]> = T extends [infer First, ...infer Rest] ?
   First extends unknown[] ? [...MyFlatten<First>, ...MyFlatten<Rest>] : [First, ...MyFlatten<Rest>] : 
   T

  type flatten = MyFlatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
  
}