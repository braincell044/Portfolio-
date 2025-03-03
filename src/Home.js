import React from 'react'
import { Link } from 'react-router-dom'
import Register from './Register'

const Home = () => {
  return (
    <div>
        <Register/>
        <Link to="/Pro" className='nav-link p-3'>Store</Link>
        <h1>hey</h1>
    </div>
  )
}

export default Home