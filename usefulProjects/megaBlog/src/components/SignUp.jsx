import React, {useState} from 'react'
import authService from '../appwrite/auth'
import {useForm} from "react-hook-form"
import {Link, useNavigate} from "react-router-dom"
import {login as authLogin} from "../features/authSlice"
import {useDispatch} from "react-redux"
import {Button, Input, Logo} from "./index"

function SignUp() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error , setError] = useState("")
    
    const signUp = async (data) => {
        setError("")
        try{
            const userData = await authService.createAccount(data)
            if(userData){
                const currentUser = await authService.getCurrentUser();
                if(currentUser) dispatch(authLogin(currentUser))
                    navigate("/")
            }
        } catch(error){
            setError(error.message)
        }
    }
    
    return (
        <div className="flex items-center justify-center"> 
            
        </div>
    )
}

export default SignUp