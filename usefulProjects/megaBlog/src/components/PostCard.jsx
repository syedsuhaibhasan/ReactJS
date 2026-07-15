import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from "react-router-dom"

function postCard({
    $id, title, featuredImage
}) {
  return (
    <Link to={`/post/${$id}`}>
    <div className='w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'>
        <div className='w-full mb-4 justify-center'>
            <img src={appwriteService.getFilePreview(featuredImage)} alt={title} 
            className='rounded-xl'></img>
        </div>
        <h2 className='text-lg font-semibold mb-2'>{title}</h2>
    </div>
    </Link>
  )
}

export default postCard