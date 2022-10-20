{

  type MyisTuple<T> = [T] extends [never] ? false : T extends readonly [any?] ? true : false

  type case1 = MyisTuple<[number]> // true

  type case2 = MyisTuple<readonly [number]> // true

  type case3 = MyisTuple<number[]> // false

}