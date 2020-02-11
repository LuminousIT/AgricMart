import React from 'react'
import {Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="nav-wrapper grey darken-3">
             
                <Link to="/dashboard" className="brand-logo"> AgricMart </Link>
           
        </nav>
    )
}

export default Navbar
