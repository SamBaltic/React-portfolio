import React from 'react'
import'./Contact.css'
import{AiOutlineMail} from 'react-icons/ai'
import {FaFacebookMessenger} from 'react-icons/fa'
import{BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contacts">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <artice className="contact__option">
            <AiOutlineMail className='contact__opinion-icon'/>
            <h4>Email</h4>
            <h5>samuilbaltiev@gmail.com</h5>
            <a href="mailto:samuilbaltiev@gmail.com" target="_blank">Send A Message</a>
          </artice>

          <artice className="contact__option">
            <FaFacebookMessenger className='contact__opinion-icon'/>
            <h4>Messenger</h4>
            <h5>SamiBaltiev</h5>
            <a href="https://m.me/SamiBaltiev" target="_blank">Send A Message</a>
          </artice>

          <artice className="contact__option">
            <BsWhatsapp className='contact__opinion-icon'/>
            <h4>WhatsApp</h4>
            <h5>+359896856521</h5>
            <a href="https://api.whatsapp.com/send?phone=+359896856521" target="_blank">Send A Message</a>
          </artice>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
