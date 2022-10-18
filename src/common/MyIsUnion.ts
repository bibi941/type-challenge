{
  // Implement a type IsUnion, which takes an input type T and returns whether T resolves to a union type.

  type MyIsUnion<T extends any,  U= T> = T extends U ? [U] extends [T] ? false : true : never

  type case1 = MyIsUnion<string>  // false
  type case2 = MyIsUnion<string | number>  // true
  type case3 = MyIsUnion<[string | number]>  // false

// 例子1：IsUnion<string|number>

// 1、先解释 T extends U ?
// 我们以为：string | number extends string | number
// 实际上是：(string extends string | number) | (number extends string |number)?
// 即：T有两种类型：string、number

// 2、此时[T] 为 ：[string] | [number]，而[U]为extends后面的东西，没有被分布条件类型分布¡，所以此时[U]为：[ string|number ]

// 3、比较[U] extends [T]，在该情况下 extends 不成立，返回true。

// 我们再看看 只传单个类型的情况

// 例子2：isUnion<string>

// 利用分布条件类型，T也只有一种类型，此时[T]为[string]，[U]为[string]，该情况下extends成立，返回false。

}