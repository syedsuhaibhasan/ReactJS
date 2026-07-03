import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components.jsx/card'

function App() {
  let myObj = {
    name:"Sohaib",
    age:20
  }

  let newArr=[1,2,3,4,5,6]
  return (
    <>
    <div className='bg-slate-900 flex flex-wrap h-screen place-content-center items-center'>
    <Card username="sohaibhasan" btnText="open LinkedIn"/>
    <Card username="muhammad hasan" />
     
    </div>
    </>
  )
}

export default App
