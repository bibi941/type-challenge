// 实现Trim<T>，它是一个字符串类型，并返回一个新字符串，其中两端的空白符都已被删除。

{
  type Space = ' ' | '\n' | '\t'

  type MyTrim<T extends string> = T extends `${Space}${infer Center}`|`${infer Center}${Space}` ? MyTrim<Center> : T

  type trimed = MyTrim<'         Hello World  '> // expected to be 'Hello World'

}