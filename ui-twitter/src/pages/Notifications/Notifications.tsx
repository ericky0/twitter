import React from 'react'
import './notifications.scss'
import { Header } from '../../components'

const Notifications = () => {

  const types = [
    'All',
    'Verified',
    'Mentions'
  ]

  return (
    <div id='notifications'>
      <Header title='Notifications' />
      <ul className="types">
        {types.map((type) => (
          <li>{type}</li>
        ))}
      </ul>
    </div>
  )
}

export default Notifications