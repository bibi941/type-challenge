{

  type myReadonly<T> = {
    readonly [key in keyof T]: T[key]
  }
  

  interface Todo {
    title: string
    description: string
  }


let todo:myReadonly<Todo> = {
  title:'kiki',
  description:'dd'
}


  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property
}