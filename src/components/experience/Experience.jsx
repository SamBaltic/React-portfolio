import React, { useRef, useState } from "react";

import './Experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import{FaCss3Alt} from 'react-icons/fa'
import{SiJavascript} from 'react-icons/si'
import{GrReactjs} from 'react-icons/gr'
import{FaBootstrap} from 'react-icons/fa'


const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container container__experience">
        <div className="my__experience">
          <h1>My Experiene</h1>
          <p>I have been working as a freelance designer and front-end developer since 2020. I’ve always been someone who has both a creative and a logical side. When I discovered web design back in quarantine, I realized it would be the perfect fit. I could use my creative side to design and my logical side to code. As a bonus, being both designer and developer allows me to make sure no detail is lost in translation.</p>
        </div>
       
       <div className="experience__data">
       <article><div className="skillCard html">
            <div className="icon"><AiFillHtml5 style={{
        color: '#000',
    position: 'relative',
    fontSize: '6em',
    zIndex: '200',
    cursor: 'pointer'
    }}/></div>
            <div className="skills-content">
                <h2>HTML5</h2>
                <div className="boxes one">
                  <div className="percent">
                    <svg>
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div className="num">
                      <h2>95<span>%</span></h2>
                    </div>
                  </div>
                </div>
            </div>
        </div></article>
        <article><div className="skillCard css">
            <div className="icon"><FaCss3Alt style={{
        color: '#000',
    position: 'relative',
    fontSize: '6em',
    zIndex: '200',
    cursor: 'pointer'
    }}/></div>
            <div className="skills-content">
                <h2>CSS</h2>
                <div className="boxes two">
                  <div className="percent">
                    <svg>
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div className="num">
                      <h2>95<span>%</span></h2>
                    </div>
                  </div>
                </div>
            </div>
        </div></article>
        <article><div className="skillCard js">
            <div className="icon"><SiJavascript style={{
        color: '#000',
    position: 'relative',
    fontSize: '6em',
    zIndex: '200',
    cursor: 'pointer'
    }}/></div>
            <div className="skills-content">
                <h2>JavaScript</h2>
                <div className="boxes three">
                  <div className="percent">
                    <svg>
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div className="num">
                      <h2>80<span>%</span></h2>
                    </div>
                  </div>
                </div>
            </div>
        </div></article>
        <article><div className="skillCard react">
            <div className="icon"><GrReactjs style={{
        color: '#000',
    position: 'relative',
    fontSize: '6em',
    zIndex: '200',
    cursor: 'pointer'
    }}/></div>
            <div className="skills-content">
                <h2>React</h2>
                <div className="boxes four">
                  <div className="percent">
                    <svg>
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div className="num">
                      <h2>70<span>%</span></h2>
                    </div>
                  </div>
                </div>
            </div>
        </div></article>
        <article><div className="skillCard bs">
            <div className="icon"><FaBootstrap style={{
        color: '#000',
    position: 'relative',
    fontSize: '6em',
    zIndex: '200',
    cursor: 'pointer'
    }}/></div>
            <div className="skills-content">
                <h2>Bootstrap</h2>
                <div className="boxes five">
                  <div className="percent">
                    <svg>
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <div className="num">
                      <h2>85<span>%</span></h2>
                    </div>
                  </div>
                </div>
            </div>
        </div></article>
       </div>
        
      
      </div>
    
    </section>
  )
}

export default Experience
