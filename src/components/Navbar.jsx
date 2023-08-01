import React from 'react'
import { useContext } from 'react'
import RatingContext from '../context/RatingContext'

const Navbar = () => {
const {websiteName} =useContext(RatingContext)
  
  return (
    <nav className="navbar navbar-light bg-dark">
    <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-light">{websiteName}</span>
    </div>
    </nav>
  )
}

export default Navbar
