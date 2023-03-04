import React from 'react'
import './notifications.scss'
import { Header, ItemsNav } from '../../components'
import { notifications } from '../../data/notifications'
import { ArrowsClockwise, Heart } from 'phosphor-react'
const Notifications = () => {

  const notificationsMenu = [
    'All',
    'Verified',
    'Mentions'
  ]

  return (
    <div id='notifications'>
      <Header title='Notifications' type='notifications'/>
      <ItemsNav types={notificationsMenu} />

      {notifications.map((notification) => (
        <div className="notification">
          <div className="symbol-wrapper">
            {notification.type === 'like' ? <Heart weight='fill' style={{color: 'rgb(249, 24, 128)'}}/> : <ArrowsClockwise weight='fill' style={{color: 'rgb(0, 186, 124)'}}/>}
          </div>
          <div className="content">
            <img src={notification.img} alt="profile picture" />
            <p><strong>{notification.userName}</strong> {notification.about}</p>
            <span>{notification.content}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Notifications