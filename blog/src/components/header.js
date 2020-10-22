import React from 'react'
import { Link } from 'gatsby'
import LOGO from '../../static/hbaa49.jpg'
import '../styles/header.css'

const Header = () => (
  <header>
    <Link to="/">
      <img src={LOGO} className="logo-image" alt="logo" />
    </Link>
  </header>
)

export default Header
