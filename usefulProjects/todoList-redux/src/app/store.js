import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
// store only updates of states when it has know reducers in it 

export const store = configureStore({
    reducer: todoReducer
})