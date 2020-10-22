import React from 'react'
import LOGO from '../../static/chokobo.jpg'
import '../styles/hero.css'

const Hero = () => (
  <div className="hero">
    <h1 className="hero-text">
      Welcome to my blog!<br />
      Enjoy lots of posts.
    </h1>
    <div className="hero-author">
      <img src={LOGO} className="hero-author-image" alt="avater" />
      <div className="hero-author-text">
        Written by motty93<br />
        Software Engineer at UKIYOcreate.co
      </div>
    </div>
  </div>
)

export default Hero
