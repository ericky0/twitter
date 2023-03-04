import React from 'react'
import { createBrowserRouter, Navigate, useNavigate } from 'react-router-dom'
import { Explore, Home, Notifications, Profile, Status, Messages } from './pages'
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
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/explore',
        element: <Explore />
      },
      {
        path: '/notifications',
        element: <Notifications />
      },
      {
        path: '/messages',
        element: <Messages />
      }
    ]
  }
])