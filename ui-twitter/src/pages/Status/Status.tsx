import { PaperPlaneRight } from 'phosphor-react'
import React, { FormEvent, KeyboardEvent, KeyboardEventHandler, useContext, useState } from 'react'
import { Header, NewTweet, Tweet } from '../../components'
import { newContext } from '../../contexts/tweets'
import './status.scss'

const Status = () => {

  const {answers, setAnswers} = useContext(newContext)

  
  return (

    <div id='status'>
      <Header title='Tweet' />
      
      <Tweet content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, alias voluptates dolore cupiditate debitis cum consequuntur sequi qui at iste autem praesentium. Animi enim eius aut praesentium cupiditate non deleniti?'/>
      <NewTweet tweets={answers!} setTweets={setAnswers!} statusPage={true}/>
      {answers?.map((tweet, index) => (
        <Tweet content={tweet} key={index}/>
      ))}
    </div>
  )
}

export default Status