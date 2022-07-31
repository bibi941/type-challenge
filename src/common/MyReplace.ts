// 实现 Replace<S, From, To> 将字符串 S 中的第一个子字符串 From 替换为 To 。

{

  type MyReplace<S extends string, From extends string, To extends string> = S extends `${infer Front}${From}${infer Rest}` ? `${Front}${To}${Rest}` : never

  type replaced = MyReplace<'types are fun!', 'fun', 'awesome'> // 期望是 'types are awesome!'

}