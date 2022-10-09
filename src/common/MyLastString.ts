
// 实现一个通用LastString<T>，它接受一个String并返回其最后一个字符
{
  
  type S = 'ji ni tai mei'
  type A = 'ikun'
  type MyLastString<T extends string> = T extends `${infer Front}${infer Last}` ? Last extends '' ? Front : MyLastString<Last> : never

  type Result = MyLastString<S>// expected to be 'i'
  type Result2 = MyLastString<A>// expected to be 'n'

}
