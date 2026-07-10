import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [
        {
            id: 1,
            text: "hello world"
        }
    ]
}

const sayHello = () => {}

//slices has name, initial state and reducers
// construct that groups related state, reducers, and generated actions into a single reusable module.
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    // A function that defines how state changes when an action occurs.
    // takes state, and actions
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const {id, text} = action.payload;
            state.todos = state.todos.map((todo) => todo.id === action.payload ? {...todo, text: text} : todo)
        }
    }
})

// exporting indiviual fucntionalities for components
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

// export reducer only for store
export default todoSlice.reducer