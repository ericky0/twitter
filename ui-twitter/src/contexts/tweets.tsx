import React, { createContext, ReactNode, useState } from "react"

interface NewProvider {
  children: ReactNode
}

type TweetContext = {
  tweets?: string[],
  setTweets?: React.Dispatch<React.SetStateAction<string[]>>
  answers?: string[]
  setAnswers?: React.Dispatch<React.SetStateAction<string[]>>
}

export const newContext = createContext<TweetContext>({})

export const NewProvider = (props: NewProvider) => {
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

  const [answers, setAnswers] = useState<string[]>([
    'Verdade!',
    'Faz muito sentido.',
    'Parabéns pela linha de pensamento'
  ])

  const val = {
    tweets,
    setTweets,
    answers,
    setAnswers
  }
  
  return (
    <newContext.Provider value={val}>
      { props.children }
    </newContext.Provider>
  )
}