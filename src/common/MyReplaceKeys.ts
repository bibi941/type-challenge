{
  // Implement a type ReplaceKeys, that replace keys in union types, if some type has not this key, just skip replacing, A type takes three arguments.
  type NodeA = {
    type: 'A'
    name: string
    flag: number
  }

  type NodeB = {
    type: 'B'
    id: number
    flag: number
  }

  type NodeC = {
    type: 'C'
    name: string
    flag: number
  }

  type MyReplaceKeys<U, T, Y> = U extends U ? {
    [P in keyof U]: P extends T ? P extends keyof Y ? Y[P] : never : U[P]
  } : never

  type Nodes = NodeA | NodeB | NodeC

  type ReplacedNodes = MyReplaceKeys<Nodes, 'name' | 'flag', { name: number, flag: string }>
  // {type: 'A', name: number, flag: string} | 
  // {type: 'B', id: number, flag: string} |
  //  {type: 'C', name: number, flag: string}
  // would replace name from string to number, replace flag from number to string.

  type ReplacedNotExistKeys = MyReplaceKeys<Nodes, 'name', { aa: number }>
  // {type: 'A', name: never, flag: number} | 
  // NodeB | 
  // {type: 'C', name: never, flag: number} 
  // would replace name to never


}