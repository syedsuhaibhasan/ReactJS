import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    //usepram is used to pass params from router to component
    const {userid} = useParams()
    return (
        <div className='bg-gray-600 text-white text-center py-5'>User: {userid}</div>
    )
}