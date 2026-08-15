import React, {useState, useEffect} from 'react'
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"

export default function AuthLayout({ children, authentication = true }) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        
        //let authValue = authStatus === true ? true : false`

        // If this page requires authentication AND the user isn't authenticated, send them to /login
        if(authentication && authStatus !== authentication){
            navigate("/login")
        }
        // If this page is for unauthenticated users, but the user is authenticated, send them to /
         else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, authentication, navigate])

    return loader ? <h1>Loading...</h1> : <>{children}</>
}

