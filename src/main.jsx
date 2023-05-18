import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './routes/Routes.jsx'
import Authprovider from './provider/Authprovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider >
    <RouterProvider router={route}></RouterProvider>
    </Authprovider>
  </React.StrictMode>,
)
