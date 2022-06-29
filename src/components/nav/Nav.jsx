import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import {BsBook} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineContacts} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#home"onClick={() => setActiveNav('#home')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#' ? 'active' : ''}><SiAboutdotme/></a>
      <a href="#experiences" onClick={() => setActiveNav('#experiences')} className={activeNav === '#' ? 'active' : ''}><BsBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contacts" onClick={() => setActiveNav('#contacts')} className={activeNav === '#' ? 'active' : ''}><AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav