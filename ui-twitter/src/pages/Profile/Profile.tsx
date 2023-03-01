import React from 'react'
import { Header, Tweet } from '../../components'
import './profile.scss'
import { images } from '../../constants'
import { Balloon, Calendar, LinkSimple, MapPin } from 'phosphor-react'

const Profile = () => {
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
      <ul className='activity'>
          <li>Tweets</li>
          <li>Tweets & replies</li>
          <li>Media</li>
          <li>Likes</li>
      </ul>
      <Tweet content={'tweet 1'} />
      <Tweet content={'tweet 2'} />
      <Tweet content={'tweet 3'} />
      <Tweet content={'tweet 4'} />
      <Tweet content={'tweet 5'} />
    </div>
  )
}

export default Profile