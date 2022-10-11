/**
 * type-challenge-MyMerge
 * @author : FangXinRui
 * @CreateData    : 2022-10-11
 * @CreateTime    : 10:16
 */
{
  // 将两个类型合并成一个类型，第二个类型的键会覆盖第一个类型的键。
  type foo = {
    name: string;
    age: string;
  }

  type coo = {
    age: number;
    sex: string
  }

  type Props = Record<string, unknown>

  type MyMerge<T extends Props, U extends Props> = {
    [K in (keyof T | keyof U)]: K extends keyof U ? U[K] : K extends keyof T ? T[K] : never
  }

  type Result = MyMerge<foo, coo>; // expected to be {name: string, age: number, sex: string}
}
