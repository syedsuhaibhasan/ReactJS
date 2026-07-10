import { useState } from 'react'
import './App.css'
import AddTodo from './compenents/AddTodo'
import Todos from './compenents/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AddTodo />
    <Todos />
    </>
  )
}

export default App
