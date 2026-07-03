import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components.jsx/card'

function App() {
  return (
    <>
    <div className='bg-slate-900 flex flex-wrap h-screen place-content-center items-center'>
    <Card channel="sohaib hasan" />
    <Card />
     
    </div>
    </>
  )
}

export default App
