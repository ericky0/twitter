import { GlobeHemisphereEast, ImageSquare, PaperPlaneRight, Smiley } from 'phosphor-react'
import React, { FormEvent, KeyboardEvent, useState } from 'react'
import './newTweet.scss'

interface NewTweetProps {
  setTweets: React.Dispatch<React.SetStateAction<string[]>>
  tweets: string[]
  statusPage?: boolean
}

const NewTweet = ({setTweets, tweets, statusPage = false}: NewTweetProps) => {

  const [newTweet, setNewTweet] = useState('')
  const [isActive, setIsActive] = useState(false)

  const handleKeyDown = (e: KeyboardEvent) => {
    const target = e.target as HTMLInputElement
    target.style.height = 'inherit';
    target.style.height = `${target.scrollHeight}px`; 
    // In case you have a limitation
    // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
  }
  const handleActiveClass = () => {
    setIsActive(true)
  }

  const createNewTweet = (e: FormEvent) => {
    e.preventDefault()

    setTweets([newTweet, ...tweets ])
    setNewTweet('')
  }

  return (
<>
    {
      statusPage === false ? (
        <form id='newTweet' onSubmit={createNewTweet}>
          <label htmlFor="tweet">
            <div className="tweet-wrapper">
              <div className="img-wrapper">
                <img src="https://github.com/ericky0.png" alt="Erick" />
              </div>
              <div className="content">
                <textarea id='tweet' 
                  placeholder="Whats happening?" 
                  onKeyDown={handleKeyDown} 
                  onChange={(event) => { setNewTweet(event.target.value) }} 
                  onClick={handleActiveClass}
                  value={newTweet}
                />
                <p className={isActive ? 'appear--true' : ''}><GlobeHemisphereEast weight='fill' />  <span>Everyone can reply</span></p>
                <div className={`separator ${isActive ? 'appear--true' : ''}`} />
                <div className="under-wrapper">
                  <div className="extra-buttons">
                    <ImageSquare weight='bold'/>
                    <Smiley weight='bold'/>
                  </div>
                  <button type='submit'>Tweet</button>
                </div>
              </div>
            </div>
          </label>
        </form>
      ) : (
      <form id='newTweet--status' onSubmit={createNewTweet}>
        <label htmlFor="tweet">
          <div className="tweet-wrapper">
            <div className="img-wrapper">
              <img src="https://github.com/ericky0.png" alt="Erick" />
            </div>
            <div className="content">
              <div className="wrapper">
                <textarea id='tweet' 
                  placeholder="Tweet your reply" 
                  onKeyDown={handleKeyDown} 
                  onChange={(event) => { setNewTweet(event.target.value) }} 
                  onClick={handleActiveClass}
                  value={newTweet}
                />
                <button type='submit' className={`${isActive ? 'disappear--true' : ''}`}>
                  <PaperPlaneRight /> 
                  <span>Reply</span>
                </button>
              </div>
              <div className="under-wrapper">
                <div className={`extra-buttons ${isActive ? 'appear--true' : ''}`}>
                  <ImageSquare weight='bold'/>
                  <Smiley weight='bold'/>
                </div>
                <button type='submit' className={`${isActive ? 'appear--true' : ''}`}>
                  <PaperPlaneRight /> 
                  <span>Reply</span>
                </button>
              </div>
            </div>
          </div>
        </label>
      </form>
      )}
    </>
  )
}

export default NewTweet