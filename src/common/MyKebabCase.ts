/**
 * type-challenge-MyKebabCase
 * @author : FangXinRui
 * @CreateData    : 2022-10-11
 * @CreateTime    : 10:56
 */
{

  // Replace the camelCase or PascalCase string with kebab-case.

  // FooBarBaz -> foo-bar-baz

  // For example

  type KebabCase<T extends string> = T extends `${infer F}${infer R}` ?
    R extends Uncapitalize<R> ? `${Uncapitalize<F>}${KebabCase<R>}` : `${Uncapitalize<F>}-${KebabCase<R>}`
    : T


  type FooBarBaz = KebabCase<"FooBarBaz">;
  const foobarbaz: FooBarBaz = "foo-bar-baz";

  type DoNothing = KebabCase<"do-nothing">;
  const doNothing: DoNothing = "do-nothing";


}
