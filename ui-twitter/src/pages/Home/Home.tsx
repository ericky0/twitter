
import React, { FormEvent, KeyboardEvent, useState } from 'react'
import { Header, Separator, Tweet } from '../../components'
import './home.scss'







const Home = () => {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Meu primeiro tweet',
    'Teste',
    'Deu certo tweetar',
    'Deu certo tweetar',
    'Deu certo tweetar',
    'Deu certo tweetar',
    'Deu certo tweetar',
    'Deu certo tweetar',
    'Deu certo tweetar',
    'Deu certo tweetar',
  ])

  const createNewTweet = (e: FormEvent) => {
    e.preventDefault()

    setTweets([...tweets, newTweet])
    setNewTweet('')
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    const target = e.target as HTMLInputElement
    target.style.height = 'inherit';
    target.style.height = `${target.scrollHeight}px`; 
    // In case you have a limitation
    // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
  }

  return (
    <div id='home'>
      <Header title='Home'/>
      <form onSubmit={createNewTweet}>
        <label htmlFor="tweet">
          <img src="https://github.com/ericky0.png" alt="Erick Hogarth" />
          <textarea id='tweet' placeholder="Whats happening?" onKeyDown={handleKeyDown} onChange={(event) => { setNewTweet(event.target.value) }} value={newTweet}/>
        </label>

        <button type='submit'>Tweet</button>
      </form>
      <Separator />
      {tweets.map((tweet, index) => (
        <Tweet content={tweet} key={index}/>
      ))}
    </div>
  )
}

export default Home