import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter } from 'react-router-dom'
import AuthLayout

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLay
        )
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
    <App />
   </Provider>
  </StrictMode>,
)
