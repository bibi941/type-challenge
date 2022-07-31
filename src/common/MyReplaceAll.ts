// 实现 ReplaceAll<S, From, To> 将一个字符串 S 中的所有子字符串 From 替换为 To。

{


  type MyReplaceAll<S extends string, From extends string, To extends string> =
   From extends '' ? S : S extends `${infer Left}${From}${infer Right}` ? `${Left}${To}${MyReplaceAll<`${Right}`, From, To>}` : S

  type replaced = MyReplaceAll<'t y p e s', ' ', ''> // 期望是 'types'



}