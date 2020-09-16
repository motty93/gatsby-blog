import React from 'react'
import { Link } from 'gatsby'

const Home = () => (
  <>
    <h1 className="message">Hello world!</h1>
    <Link to='/page2'>ページ２へ</Link>
  </>
)

export default Home
