import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
    <div className='h-screen w-full' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
            <button 
            className='outline-none px-4 rounded-full text-white shadow-sm'
            style={{backgroundColor: "red"}}
            onClick={() => setColor("red")}>Red</button>
            <button 
            className='outline-none px-4 rounded-full text-white shadow-sm'
            style={{backgroundColor: "green"}}
            onClick={() => setColor("Green")}>Green</button>
            <button 
            className='outline-none px-4 rounded-full text-white shadow-sm'
            style={{backgroundColor: "blue"}}
            onClick={() => setColor("blue")}>Blue</button>
            <button 
            className='outline-none px-4 rounded-full text-black shadow-sm'
            style={{backgroundColor: "cyan"}}
            onClick={() => setColor("cyan")}>Cyan</button>
            <button 
            className='outline-none px-4 rounded-full text-black shadow-sm'
            style={{backgroundColor: "yellow"}}
            onClick={() => setColor("yellow")}>Yellow</button>
            <button 
            className='outline-none px-4 rounded-full text-white shadow-sm'
            style={{backgroundColor: "orange"}}
            onClick={() => setColor("orange")}>Orange</button>
          </div>
        </div>
    </div>
    </>
  )
}

export default App
