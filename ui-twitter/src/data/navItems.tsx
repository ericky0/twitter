import { House, Hash, Bell, Envelope, BookmarkSimple, FileText, User, DotsThreeCircle } from 'phosphor-react'
import { IconWeight } from 'phosphor-react'
import React from 'react'


export const navItems = [
  {
    name: 'Home',
    svg: (weight?: IconWeight) => <House weight={weight ? weight : 'regular'}/>
  },
  {
    name: 'Explore',
    svg: (weight?: IconWeight) => <Hash weight={weight ? weight : 'regular'}/>
  },
  {
    name: 'Notifications',
    svg: (weight?: IconWeight) => <Bell weight={weight ? weight : 'regular'}/>
  },
  {
    name: 'Messages',
    svg: (weight?: IconWeight) => <Envelope weight={weight ? weight : 'regular'}/>
  },
  {
    name: 'Bookmarks',
    svg: (weight?: IconWeight) => <BookmarkSimple weight={weight ? weight : 'regular'}/>
  },
  {
    name: 'Lists',
    svg: (weight?: IconWeight) => <FileText weight={weight ? weight : 'regular'}/>
  },
  {
    name: 'Profile',
    svg: (weight?: IconWeight) => <User weight={weight ? weight : 'regular'}/>
  },
  {
    name: 'More',
    svg: (weight?: IconWeight) => <DotsThreeCircle weight={weight ? weight : 'regular'}/>
  },
]