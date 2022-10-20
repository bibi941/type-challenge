{
  // In This Challenge, You should implement a type Zip<T, U>, T and U must be Tuple
  type MyZip<T extends any[], U extends any[]> = T extends [infer F1, ...infer R1] ? U extends [infer F2, ...infer R2] ? [[F1, F2], ...MyZip<R1, R2>] : [] :[]

  type exp = MyZip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]
  
}