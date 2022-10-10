{
  // 计算字符串的长度，类似于 String#length 。
  type MySringlength<T extends string, U extends string[] = []> = T extends never ?
    0 :
    T extends `${infer _}${infer Rest}` ?
    MySringlength<Rest, [_, ...U]> : U['length']

  type Length = MySringlength<'012345'>
  //except 6
}