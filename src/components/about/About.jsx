import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {AiFillProject} from 'react-icons/ai'
import{BsGlobe} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Experience</small>
            </article>
            <article className='about__card'>
              <AiFillProject className='about__icon'/>
              <h5>Projects</h5>
              <small>50+ Compleated Projects</small>
            </article>
            <article className='about__card'>
              <BsGlobe className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ People Worldwide</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet, cum euismod inermis an. Accusamus prodesset in has, quas etiam nec ne. Ius purto aliquip interesset cu. Et vis modus porro solet, option quaeque dolorum no vel. At graece appareat patrioque nam.</p>
        <a href="#contacts" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
