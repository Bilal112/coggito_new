import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './nav.css'
import logo from '../../assets/images/logo.png'
const Nav = () =>{
    return(
<nav class="navbar navbar-expand-lg sticky-top navbar-light custom-nav">
  <Link className="navbar-brand" to="/">
      <img src={logo} width='50px' height='40px' />
  </Link>
  {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav ml-auto mr-4 custom-nav-links">
    <Link to="/#home">Home</Link>
      <Link to="#service">Services</Link>
      <Link to="#blog">Blog</Link>
      <Link to="#contact">Contact Us</Link>
       <a class="nav-item nav-link" href="#">About Us</a> 
       <a class="nav-item nav-link" href="#">Terms &  FAQ</a>
    </div>
  </div> */}
</nav>
    )
}

export default Nav;