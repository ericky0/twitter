import React, { useEffect, useState } from 'react'
import { Envelope, Gear, Sparkle } from 'phosphor-react'
import './header.scss'

interface HeaderProps {
  title: string,
  type?: string
}

const Header = (props: HeaderProps) => {
  const [type, setType] = useState('')

  useEffect(() => {
    props.type && setType(props.type)
  }, [])


  return (
    <div className='timeline-header'>
    { props.title }
    {
      {
        'home': <Sparkle style={{color: 'var(--twitter-blue)'}}/>,
        'explore': <Gear />,
        'notifications': <Gear />,
        'messages': <div className='svg-wrapper'> <Gear /> <Envelope /></div>
      }[type]
    }
  </div>
  )
}

export default Header