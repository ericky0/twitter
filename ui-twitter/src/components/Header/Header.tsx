import React from 'react'
import { Sparkle } from 'phosphor-react'
import './header.scss'

interface HeaderProps {
  title: string,
}

const Header = (props: HeaderProps) => {
  return (
    <div className='timeline-header'>
    {props.title}
    <Sparkle />
  </div>
  )
}

export default Header