// 实现一个MyReverse<T>，用于反转元组T
{

  type MyReverse<T extends unknown[]> = T extends [...infer Rest, infer Last] ? [Last, ...MyReverse<Rest>,] : T

  type Result = MyReverse<[1, 2, 3]> // expected to be [3, 2, 1]

}