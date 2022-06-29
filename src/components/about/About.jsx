import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__conttainer">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About"></img>
          </div>
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
          <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>3+ Years of Experience</small>
          </article>

          <article className='about__card'>
          <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>3+ Years of Experience</small>
          </article>
          
          <article className='about__card'>
          <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>3+ Years of Experience</small>
          </article>
        </div>
      </div>
    </section>
  )
}

export default about