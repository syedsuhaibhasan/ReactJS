import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../components'
import appwriteService from "../appwrite/config"
import {useNavigate, useParams} from 'react-router-dom'

function EditPost() {
  const [post, setPosts] = useState(null)
  const {slug} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then(
        (post) => {
          setPosts(post)
        }
      )
    } else {
      navigate('/')
    }
  }, [slug, navigate])

  return post ?(
    <div className='py-8'>
      <COntainer>
        <PostForm post={post}/>
      </COntainer>
    </div>
  ) : null
}

export default EditPost