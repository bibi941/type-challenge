
type Person = {
  name: string;
  age: number;
}

type AS = keyof Person


type K2 = keyof Person[]


 
interface Male<T> extends Person {
  gender: T
}

type  gender = "male" | 'famale'
 
let bibi: Male<gender> = { 
  age: 12,
  name: 'bibi', 
  gender: 'male'
}