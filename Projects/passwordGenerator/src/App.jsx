import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [length, setLength] = useState(0)

  return (
    <>
    <div className='bg-black h-screen w-full'>
      <div className='fixed flex flex-wrap top-20 justify-center inset-x-0  text-white'>
        test
      </div>
    </div>
    </>
  )
}

export default App
