import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService, { AuthService } from './appwrite/auth'
import {login, logout} from './features/authSlice'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      // if the current user gets the data, the login state will be updated to true, and updates userdata
      if (userData) dispatch(login({userData}))
      // if it returns false or nothing, the state is still updated to logout, to keep the state updated
      else {dispatch(logout())}
    })
    .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return 
    <div>Loading...</div>
  } else {
    return
    <div className=''></div>
  }
}

export default App
 