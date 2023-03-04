import React from 'react'
import './itemsNav.scss'

interface ItemsNavProps extends React.HTMLAttributes<HTMLDivElement>{
  types: string[]
}

const ItemsNav = (props: ItemsNavProps) => {
  return (
    <ul className={`itemsNav ${props.className}`}>
    {props.types.map((type) => (
      <li style={{flexBasis: `calc(100% / ${props.types.length})`}}>{type}</li>
    ))}
  </ul>
  )
}

export default ItemsNav