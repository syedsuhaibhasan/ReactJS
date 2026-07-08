import React from 'react'
import UserContext from './userContext';
import { useState } from 'react';

// takes compnents or any data as param so that this can provide data
const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    return(
        // in value we pass access to data in object format
    <UserContext.Provider value={{user, setUser}}>
    {children}
    </UserContext.Provider>
    )
}

export default UserContextProvider