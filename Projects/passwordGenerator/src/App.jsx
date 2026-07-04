import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numbertrue, setnumbertrue] = useState(false)
  const [chartrue, setchartrue] = useState(false)
  const [password, setPassword] = useState("")

  // useref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(
    () => {
      let pass = ""
      let str = ""
      str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (numbertrue) str += "0123456789"
      if (chartrue) str += "~`!@#$%^&*()_+*?/>.<,':;|{}]["
      for(let i=1; i<=length; i++) {
        let char = Math.floor(Math.random() * str.length)
        pass += str.charAt(char)
      }
      setPassword(pass)
    }, [length,numbertrue,chartrue,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, length)
    window.navigator.clipboard.writeText(password)
  },[password])

    useEffect(() => {
      passwordGenerator()
    },[length,numbertrue,chartrue])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <div className='flex shawdow overflow-hidden mb-4'>
         <input
          className='outline-none rounded-l-lg w-full py-1 px-3'
          type="text"
          value={password}
          readOnly
          placeholder='password'
          ref={passwordRef} />
          <button className='top-3 bg-blue-700 text-white py-1 px-3 text-center rounded-r-lg' onClick={copyPasswordToClipboard}>Copy</button>
        </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={8}
          max={100}
          value={length}
          onChange={(e) => {setLength(e.target.value)}}
           />
           <label >Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type="checkbox"
          defaultChecked={numbertrue}
          id='numberInput'
          onChange={() => {
            setnumbertrue((prev) => !prev);
          }} />
          <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type="checkbox"
          id="charInput"
          defaultChecked={chartrue}
          onChange={() => {
            setchartrue((prev) => !prev)
          }} />
          <label >Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
