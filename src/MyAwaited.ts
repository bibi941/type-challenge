
{

  type MyAwaited<T> = T extends Promise<infer V> ? MyAwaited<V> : T



  type ExampleType = Promise<string>

  type Result = MyAwaited<ExampleType> // string

  type Result2 = MyAwaited<Promise<Promise<Promise<string | number>>>> // string|number
} 