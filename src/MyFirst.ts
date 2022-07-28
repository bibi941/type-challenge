{
  type MyFirst<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never;

  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type head1 = MyFirst<arr1> // expected to be 'a'
  type head2 = MyFirst<arr2> // expected to be 3

  
}