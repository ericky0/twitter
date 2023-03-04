import React from 'react'
import { Header } from '../../components'
import { messages } from '../../data/messages'
import './messages.scss'

const Messages = () => {
  return (
    <div id='Messages'>
      <Header title='Messages' type='messages'/>

      {messages.map(message => (
        <div className='single-message'>
          <div className="img-wrapper">
            <img src={message.img} alt="profile picture" />
          </div>
          <div className="message">
            <div className="info-message">
              <strong>{message.name}</strong>
              <p>@{message.user}</p>
              <p>·</p>
              <p>{message.date}</p>
            </div>
            <div className="content-message">
              <p>{message.lastMessage}</p>
            </div>
          </div>
        </div>
      ))}

    </div>
  )
}

export default Messages