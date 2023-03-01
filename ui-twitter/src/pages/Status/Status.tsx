import { PaperPlaneRight } from 'phosphor-react'
import React, { FormEvent, KeyboardEvent, KeyboardEventHandler, useState } from 'react'
import { Header, Tweet } from '../../components'
import './status.scss'

const Status = () => {

  const [newAnswer, setNewAnswer] = useState<string>('')
  const [answers, setAnswers] = useState<string[]>([
    'Verdade!',
    'Faz muito sentido.',
    'Parabéns pela linha de pensamento'
  ])

  const createNewAnswer = (e: FormEvent) => {
    e.preventDefault()
    setAnswers([...answers, newAnswer])
    setNewAnswer('')
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    const target = e.target as HTMLInputElement
    target.style.height = 'inherit';
    target.style.height = `${target.scrollHeight}px`; 
    // In case you have a limitation
    // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
  }
  
  return (

    <div id='status'>
      <Header title='Tweet' />
      
      <Tweet content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, alias voluptates dolore cupiditate debitis cum consequuntur sequi qui at iste autem praesentium. Animi enim eius aut praesentium cupiditate non deleniti?'/>

      <form onSubmit={createNewAnswer}>
        <label htmlFor="tweet">
          <img src="https://github.com/ericky0.png" alt="Erick Hogarth" />
          <textarea id='tweet' placeholder="Tweet your answer" onKeyDown={handleKeyDown} value={newAnswer} onChange={(e) => {
            setNewAnswer(e.target.value)
          }}/>
        </label>

        <button type='submit'>
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>
      {answers.map((answer, index) => (
        <Tweet content={answer} key={index}/>
      ))}
    </div>
  )
}

export default Status