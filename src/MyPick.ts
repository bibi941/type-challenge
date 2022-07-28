{
    type myPick<T, K extends keyof T> = {
        [key in K]: T[key]
    }

    interface Todo {
        title: string
        description: string
        completed: boolean
    }

    type TodoPreview = myPick<Todo, 'title' | 'completed'>

    const todo: TodoPreview = {
        title: 'Clean room',
        completed: false,
    }
}