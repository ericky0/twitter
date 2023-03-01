import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components'
import './default.scss'

const Default = () => {
  return (
    <div id='default'>
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default Default