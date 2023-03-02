import React from 'react'
import ReactDOM from 'react-dom/client'
import { redirect, RouterProvider } from 'react-router-dom'
import { router } from './routes'
import './global.css'
import { NewProvider } from './contexts/tweets'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <>
      <NewProvider>
        <RouterProvider router={router} />
      </NewProvider>
    </>
  </React.StrictMode>
)
