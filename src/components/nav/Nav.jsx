import React from 'react'
import {useState} from "react";
import './nav.css'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Become Uber</a>
            <a href="#about" onClick={() => setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}>Get Uber</a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About as</a>
        </nav>
  )
}

export default Nav