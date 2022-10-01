import React from 'react'
import'./Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id:1,
    image:IMG1,
    title:'Logo Grid Layout',
    github:'https://github.com/SamBaltic/Grid-Layout'
  },
  {
    id:2,
    image:IMG2,
    title:'The Rosa',
    github:'https://github.com/SamBaltic/Animated-Page'
  },
  {
    id:3,
    image:IMG3,
    title:'Nature',
    github:'https://github.com/SamBaltic/Nature'
  },
  {
    id:4,
    image:IMG4,
    title:'Barber Shop',
    github:'https://github.com/SamBaltic/Barber-Shop'
  },
  {
    id:5,
    image:IMG5,
    title:'Barber Shop 2',
    github:'https://github.com/SamBaltic/Barber-Shop'
  },
  {
    id:6,
    image:IMG6,
    title:'Barber Shop 3',
    github:'https://github.com/SamBaltic/Barber-Shop'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      {
        data.map(({id, image, title, github}) =>{
          return (
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-img">
              <img src={image} alt={title} />
            </div>
              <h3>{title}</h3>
              <div className="portfolio-item-cta">
              <a href={github} className='btn'>Github</a>
              <a href={github} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
          )
        })
      } 
      </div>
    </section>
  )
}

export default Portfolio
