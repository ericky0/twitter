import React, { useEffect, useState } from 'react'
import './sidebar.scss'
import { images } from '../../constants'
import { navItems } from '../../data/navItems'
import { Link, useLocation } from 'react-router-dom'
import { Pencil } from 'phosphor-react'


const Sidebar = () => {
  const [currentNavItem, setCurrentNavItem] = useState('')
  let path = useLocation().pathname.split('/')[1]
  if(path) {
    path = path[0].toUpperCase() + path.substring(1)
  }

  useEffect(() => {
    setCurrentNavItem(path)
  }, [path])
  
  
  return (
    <div id='sidebar'>
      <div className="sidebar-fixed">
        <img src={images.twitter} alt="logo" />
        <nav>
          {navItems.map((item, index) => (
              <Link
                to={`/${item.name.toLowerCase()}`}
                className={currentNavItem === item.name ? 'active' : ''}
                key={item.name + index}
              >
                {currentNavItem === item.name ? item.svg('fill') : item.svg()}
                <span>{item.name}</span>
              </Link>
          ))}
        </nav>
        <button type='button'>
          <Pencil />
          <span>Tweet</span>
        </button>
      </div>
    </div>
  )
}

export default Sidebar