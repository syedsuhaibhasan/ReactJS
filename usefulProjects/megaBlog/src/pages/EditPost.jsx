import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../components'
import appwriteService from "../appwrite/config"
import {useNavigate, useParams} from 'react-router-dom'

function EditPost() {
  const [posts, setPosts] = useState(null)
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
      navigate('/posts')
    }
  }, [slug, navigate])

  return (
    <div>EditPost</div>
  )
}

export default EditPost