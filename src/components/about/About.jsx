import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {FiUsers} from 'react-icons/fi'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About"></img>
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
          <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>10+ Clients</small>
          </article>
          
          <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>15+ Completed projects</small>
          </article>
        </div>
        
        <p>
        Lorem ipsum dolor sit amet. Sit incidunt nulla eum quia asperiores aut deserunt sunt. A velit perspiciatis qui nisi quis quo nobis numquam in laudantium expedita qui molestiae nemo. Et dolor tempora in assumenda dolorem hic voluptatem ea magnam explicabo sed alias suscipit. Et voluptatem ipsam cum sequi architecto est quibusdam saepe sit necessitatibus internos eum laborum veritatis vel culpa internos ut assumenda sapiente.
        </p>

        <div className="btn__talk">
          <div className="vertical__center">
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default about