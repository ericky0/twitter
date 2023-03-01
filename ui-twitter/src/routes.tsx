import React from 'react'
import { createBrowserRouter, Navigate, useNavigate } from 'react-router-dom'
import { Home, Status } from './pages'
import Default from './layouts/Default'


export const router = createBrowserRouter([
  {
    path: '',
    element: <>
      <Default />
    </>,
    children: [      
      {
        path: '/',
        element: <Navigate to={'/home'}/>
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/tweet',
        element: <Status />,
      }
    ]
  }
])