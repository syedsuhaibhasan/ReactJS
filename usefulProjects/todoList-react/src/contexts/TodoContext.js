import {createContext, useContext} from 'react'

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            task: "Todo message",
            completed: false,
        },
    ],
    addTodo: (task) => {},
    updateTodo: (id, task) => {},
    deleteTask: (id) => {},
    toggleComplete: (id) => {}
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}