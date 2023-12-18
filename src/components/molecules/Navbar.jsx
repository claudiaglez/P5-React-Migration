import React from 'react'
import "../molecules/navbar.css"

const Navbar = () => {
  return (
    <>
    <nav> <img className="icon" src="/src/assets/img/logo.svg" alt="logotipo"></img>

    <ul className="navbar">
        <li><a href="">DESCRIPTION </a></li>
        <li>FEATURES</li>
        <li><a href=""> SCREENS</a></li>
        <li className="dropdown-li"> EXTRA
        <ul className="dropdown">
            <li>ARTICLE DETAILS</li>
            <li>TERMS CONDITIONS</li>
            <li>PRIVACY POLICY</li>
        </ul>
    </li>
        <a className="download_navbar" href="https://factoriaf5.org/"target="_blank"><li> DOWNLOAD</li></a>
        </ul>
        </nav>
        </>
  )
}

export default Navbar