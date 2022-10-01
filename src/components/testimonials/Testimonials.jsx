import React from 'react'
import'./Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const client = [{
  avatar:AVTR1,
  name:'John Johm',
  review:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolorem quaerat quibusdam debitis perferendis repellat blanditiis iusto, iste consequatur eveniet'
},
{
  avatar:AVTR2,
  name:'John Jim',
  review:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolorem quaerat quibusdam debitis perferendis repellat blanditiis iusto, iste consequatur eveniet'
},
{
  avatar:AVTR3,
  name:'John Jack',
  review:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolorem quaerat quibusdam debitis perferendis repellat blanditiis iusto, iste consequatur eveniet'
},
{
  avatar:AVTR4,
  name:'John Jake',
  review:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error dolorem quaerat quibusdam debitis perferendis repellat blanditiis iusto, iste consequatur eveniet'
},
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from client</h5>
      <h2>Testimobials</h2>
      <Swiper className="container testimonial__container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        {
          client.map(({avatar, name, review}, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
            <div className="client__avatar">
              <img src={avatar} alt="Avanat One" />
            </div>
            <h5 className='client__name'>{name}</h5>
              <small className="client__review">
                {review}
              </small>
          </SwiperSlide>
          )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials
