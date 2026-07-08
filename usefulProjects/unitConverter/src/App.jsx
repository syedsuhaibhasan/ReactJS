import { useEffect, useState } from 'react'
import {InputBox} from './components'
import useUnitConverter from '../hooks/useUnitConverter'
import { conversionRates } from '../hooks/useUnitConverter'  
import { useId } from 'react'

const categories = Object.keys(conversionRates)  // ["length", "weight", "temperature"]

function App() {
  const uniqId = useId()
  const [inputValue, setInputValue] = useState(1);
  const [to, setTo] = useState("inch");
  const [unit, setUnit] = useState("meter")
  const [from, setFrom] = useState("meter");
  const [convertedVal, setConvertedVal] = useState(0);
  const [category, setCategory] = useState("length");

  const units = useUnitConverter(category);
  const options = Object.keys(units);
  const categories = Object.keys(conversionRates);

  useEffect(() => {
    const unitKeys = Object.keys(conversionRates[category]);
    setFrom(unitKeys[0])
    setTo(unitKeys[1] || unitKeys[0])
  }, [category])

  const swap = () => {
    setTo(from);
    setFrom(to);
    setInputValue(convertedVal);
    setConvertedVal(inputValue);
  }

  const convert = () =>  {
    if (category === "temperature") {
      const baseValue = units[from].toBase(inputValue)
      setConvertedVal(units[to].fromBase(baseValue))
    } else{
    const baseValue = inputValue/units[from];
    setConvertedVal(baseValue * units[to]);
    }
  }

  return (
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
      backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg')`,
      }}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }} >
          <div className='w-1/2 flex flex-wrap justify-end text-right mb-3'>
          
            <p className='text-black mb-2 w-full'>
              Category</p>
            <select
              className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
              onChange={(e) => setCategory?.(e.target.value)} >
                {
                  categories.map((category)=>(
                    <option key={category} value={category}>
                        {category}
                    </option>
                  ))
                }
              </select>
            </div>
            <div className='w-full mb-1'>
              <InputBox
              label="from"
              inputValue={inputValue}
              units = {options}
              onInputValueChange={(inputValue) => setInputValue(inputValue)}
              onConversionUnitChange={(unit) => setFrom(unit)}
              selectUnit={from} />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >swap</button>
            </div>
            <div className='w-full mb-1'>
              <InputBox
              label="to"
              inputValue={convertedVal}
              units = {options}
              onInputValueChange={(inputValue) => setInputValue(convertedVal)}
              onConversionUnitChange={(unit) => setTo(unit)}
              selectUnit={to}
              isInputUnitDisable={true} />
            </div>
          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
          Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>

        </div>
      </div>
    </div>
    
  )
}

export default App
