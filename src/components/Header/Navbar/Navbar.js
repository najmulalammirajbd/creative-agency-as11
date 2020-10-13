import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
import'../Navbar/Navbar.css'

const Navbar = () => {
    const history = useHistory () 
    const orderNow = () => {
        history.push('/order');
    }
    return (
        <nav style={{backgroundColor:'#FBD062'}} class="navbar navbar-expand-lg navbar-light ">
            <a class="navbar-brand" href="#"><img style={{width:'190px'}} src={logo} alt=""/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link mr-5 text-black" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5 text-black" href="#">Our Portfolio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5 text-black" href="#">Our Team</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5 text-black" href="#">Contact Us</a>
      </li>
      <li class="nav-item">
        <button className="nav-btn" onClick={orderNow}>Login</button>
      </li>
    </ul>
    
  </div>
</nav>
    );
};

export default Navbar;