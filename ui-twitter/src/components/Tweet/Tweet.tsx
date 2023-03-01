import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';
import { Link } from 'react-router-dom'
import React from 'react'
import './tweet.scss';

interface TweetProps {
  content: string
}

const Tweet = (props: TweetProps) => {
  return (
    <div id='tweet'>
      <Link to='/tweet'>
        <img src="https://github.com/ericky0.png" alt="erick hogarth" />
        <div className='content'>
          <div className="header">
            <strong>Erick Hogarth</strong>
            <span>@erickvsky</span>
          </div>
          <p>
            {props.content}
          </p>
          <div className="content-footer">
            <button type='button'>
              <ChatCircle />
              20
            </button>
            <button type='button'>
              <ArrowsClockwise />
              20
            </button>
            <button type='button'>
              <Heart />
              20
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}


export default Tweet