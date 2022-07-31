// 实现一个泛型 AppendArgument<Fn, A>，对于给定的函数类型 Fn，以及一个任意类型 A，返回一个新的函数 G。G 拥有 Fn 的所有参数并在末尾追加类型为 A 的参数。

{
  type MyAppendArgument<F, T> = F extends (...arg1s: infer Args) => infer Return ? (...ar2gs: [...Args, T]) => Return : never
  
  type Fn = (a: number, b: string) => number

  type Result = MyAppendArgument<Fn, boolean>
  // 期望是 (a: number, b: string, x: boolean) => number

}