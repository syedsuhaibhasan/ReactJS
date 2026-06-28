import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

const ReactElement = {
    type:'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Google'
}

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Visit Google'
)

const anotherElement = (
  <a href="https://google.com" target="_blank">Google</a>
)

createRoot(document.getElementById('root')).render(
  <App />
)
