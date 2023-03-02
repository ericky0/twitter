import React, { useContext } from 'react'
import { newContext } from '../../contexts/tweets'
import { Header, NewTweet, Tweet } from '../../components'
import './home.scss'

const Home = () => {
  const {tweets, setTweets} = useContext(newContext)
  return (
    <div id='home'>
      <Header title='Home' home={true}/>
      <NewTweet setTweets={setTweets!} tweets={tweets!}/>
      {tweets?.map((tweet, index) => (
        <Tweet content={tweet} key={index}/>
      ))}
    </div>
  )
}

export default Home