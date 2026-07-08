import React from 'react'
import {useState, useContext} from 'react'
import UserContext from '../context/userContext'
function Profile() {
    // retrieving data from context 
    const {user} = useContext(UserContext)
    if (!user) return <div>Please Login</div>
    return (
        <div>
            Welcome {user.username}
        </div>
    )
}

export default Profile