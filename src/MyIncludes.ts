// 在类型系统里实现 JavaScript 的 Array.includes 方法，这个类型接受两个参数，返回的类型要么是 true 要么是 false。
{
  type isEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;

  type MyIncludes<T extends unknown[], U> = T extends [infer I, ...infer O] ? (isEqual<I, U> extends true ? true : MyIncludes<O, U>) : false

  type isPillarMen = MyIncludes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'da'> // expected to be `false`

  type isPillarMen2 = MyIncludes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'> // expected to be `true`
}
