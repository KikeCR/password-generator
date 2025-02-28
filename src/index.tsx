import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

let basename = ''
// Check the hostname and pathname
if (window.location.hostname === 'lbarrantes.com' && window.location.pathname.startsWith('/password-generator')) {
  // Set the basename for production (when hosted at https://lbarrantes.com/password-generator)
  basename = '/password-generator'
}

root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
