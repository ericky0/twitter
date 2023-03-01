import React from 'react'
import { Sparkle } from 'phosphor-react'
import './header.scss'

interface HeaderProps {
  title: string,
  home?: boolean
}

const Header = (props: HeaderProps) => {
  return (
    <div className='timeline-header'>
    { props.title }
    { props.home ? <Sparkle /> : null}
  </div>
  )
}

export default Header