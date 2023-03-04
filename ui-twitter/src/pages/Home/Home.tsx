import React, { useContext } from 'react'
import { newContext } from '../../contexts/tweets'
import { Header, ItemsNav, NewTweet, Tweet } from '../../components'
import './home.scss'

const Home = () => {
  const {tweets, setTweets} = useContext(newContext)
  const homeMenu = [
    'For you',
    'Following'
  ]
  return (
    <div id='home'>
      <Header title='Home' type='home'/>
      <ItemsNav types={homeMenu}/>
      <NewTweet setTweets={setTweets!} tweets={tweets!}/>
      {tweets?.map((tweet, index) => (
        <Tweet content={tweet} key={index}/>
      ))}
    </div>
  )
}

export default Home