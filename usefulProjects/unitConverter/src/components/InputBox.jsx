import React from 'react';

export function InputBox({
    label,
    inputValue,
    onInputValueChange,
    onConversionUnitChange,
    units = [],
    isInputUnitDisable = false,
    isConversionUnitDisable = false,
    selectUnit = "meter",

    className="",
}) {
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className='w-1/2'>
                <label className='text-black/40 mb-2 inline-block'>
                {label}</label>
                <input 
                type="number"
                placeholder='Unit'
                className='outline-none w-full bg-transparant py-1.5'
                disabled = {isInputUnitDisable}
                value = {inputValue}
                onChange={(e) => onInputValueChange?.(Number(e.target.value))} />
            </div>
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className='text-black/40 mb-2 w-full'>
                    Unit</p>
                <select
                    value={selectUnit}
                    disabled={isConversionUnitDisable}
                    onChange={(e) => {onConversionUnitChange?.(e.target.value)}}
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" >
                    {
                        units.map((unit)=>(
                            <option key={unit} value={unit}>
                                {unit}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}
