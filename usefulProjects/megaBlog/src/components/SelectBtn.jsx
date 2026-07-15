import React, {useId} from 'react'

function SelectBtn({
    options = [],
    label,
    className = "",
    ...props,
}, ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id}
        className=''>
            ${label}
            </label>}
        <select
        {...props}
        id={id}
        className={`w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 ${className}`}
        >
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(SelectBtn)