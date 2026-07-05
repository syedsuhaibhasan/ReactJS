import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 15;
  function addValue() {
    if (counter<=19) {
      console.log(counter);
    setCounter(counter+1);
    }
  }

  function decreaseValue() {
    if (counter>0) {
      setCounter(counter-1); 
    }   
  }

  return (
    <>
      <section id="center">
        <h1>React aur Sohaib</h1>
        <h2 id='counts'>Counter Value: {counter}</h2>
        <button  
        onClick={addValue}>Add value  {counter}</button>
        <button onClick={decreaseValue}>Decrease Value {counter}</button>
        <p>footer: {counter}</p>
      </section>
    </>
  )
}

export default App
