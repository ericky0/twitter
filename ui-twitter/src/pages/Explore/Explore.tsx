import { DotsThree, Gear, MagnifyingGlass } from 'phosphor-react'
import React from 'react'
import './explore.scss'
import { trendings } from '../../data/trendings'

const Explore = () => {
  const categories = [
    'For you',
    'Trending',
    'News',
    'Sports',
    'Entertainment'
  ]

  return (
    <div id='explore'>
      <div className="search-wrapper">
        <label htmlFor='search'>
          <MagnifyingGlass />
          <input id='search' type='text' />
        </label>
        <Gear />
      </div>
      <ul className="categories">
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
      <ul className="trendings">
        {trendings.map((trending) => (
          <li>
            <div className="wrapper">
              <p>{trending.theme}</p>
              <strong>{trending.name}</strong>
              <p>{trending.tweetsNumber}</p>
            </div>
            <DotsThree />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Explore