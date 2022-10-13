{
  // Implement a type IsNever, which takes input type T. If the type of resolves to never, return true, otherwise false.
  type MyIsNever<T> = [T] extends [never] ? true : false;

  type A = MyIsNever<never>  // expected to be true
  type B = MyIsNever<undefined> // expected to be false
  type C = MyIsNever<null> // expected to be false
  type D = MyIsNever<[]> // expected to be false
  type E = MyIsNever<number> // expected to be false
  
}