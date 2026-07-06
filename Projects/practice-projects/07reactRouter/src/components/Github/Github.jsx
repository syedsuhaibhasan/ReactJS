import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
//traditional way

    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/syedsuhaibhasan')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data); 
    //         setData(data)})
    // }, [])

    const data = useLoaderData();
  return (
    <div className='text-center m4 bg-gray-600 text-white p-4 text-3xl'>
        Github Followers: {data?.followers}
        <img src={data?.avatar_url} alt="Git Profile Picture" width={300} />
    </div>
  )
}

export default Github

// using loader in route
export const GithubInfo = async () => {
    const response = await fetch('https://api.github.com/users/syedsuhaibhasan')
    return response.json()
}