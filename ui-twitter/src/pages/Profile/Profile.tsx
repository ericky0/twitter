import React from 'react'
import { Header, ItemsNav, Tweet } from '../../components'
import './profile.scss'
import { images } from '../../constants'
import { Balloon, Calendar, LinkSimple, MapPin } from 'phosphor-react'

const Profile = () => {
  const activity = [
    'Tweets',
    'Tweets & replies',
    'Media',
    'Likes',
  ]
  const contentTweet = [
    'tweet 1',
    'tweet 2',
    'tweet 3',
    'tweet 4',
    'tweet 5',
    'tweet 6',
    'tweet 7',
  ]
  return (
    <div id='profile'>
      <Header title='erick'/>
      <div className="top">
        <div className="img-wrapper">
          <img src={images.banner} alt="banner" />
        </div>
        <div className="profile">
          <img src={images.profile} alt="" /> 
          <button>Edit profile</button>
        </div>
      </div>
      <div className="info">
        <div className="title">
          <h2>erick</h2>
          <span>@erickvsky</span>
        </div>
        <span className="desc">
          our scars serve to remind us that the past was real 19y
        </span>
        <ul className='personal-info'>
          <li><MapPin />Hellendoorn, Nederland</li>
          <li><LinkSimple /><a href='https://www.instagram.com/erickvsky/' target={'_blank'}>instagram.com/erickvsky/</a></li>
          <div className="break-column" />
          <li><Balloon />Born May 15, 2003</li>
          <li><Calendar />Joined December 2019</li>
        </ul>
        <div className="follows">
          <p><strong>494</strong> Following </p>
          <p><strong>79</strong> Followers </p>
        </div>
      </div>
      <ItemsNav types={activity} className='profile-items'/>
      {contentTweet.map(item => (
        <Tweet content={item} className='static-tweets'/>
      ))}
    </div>
  )
}

export default Profile