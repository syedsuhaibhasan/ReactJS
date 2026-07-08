import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/about/About.jsx'
import ContactUs from './components/contactUs/ContactUs.jsx'
import User from './components/user/User.jsx'
import Github, { GithubInfo } from './components/Github/Github.jsx'

// TWO WAYS OF DEFINING ROUTES

// NUMBER ONE
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout />,
//     children: [
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path:"about",
//         element: <About />
//       },
//       {
//         path: "contact-us",
//         element: <ContactUs />
//       }
//     ]
//   }
// ])

//NUMBER TWO
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='contact-us' element={<ContactUs />}></Route>
      <Route path='user/:userid' element={<User />}></Route>
      <Route
       path='github' 
       element={<Github />}
       //we use loader so when the user hovers over the compnent, the data is already fetched before he clicked the component
       loader={GithubInfo}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
