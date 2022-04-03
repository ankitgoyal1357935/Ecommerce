
import React from 'react';

import "./Header.css";

const Header = ()=>{

    return (

        <>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/home">Shoppkart</a>
  
  <form className="  form-inline my-2 my-lg-0">
      <input className="form-control w-100 mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    </form>


    <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>


  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/"><i className="fa fa-home"></i> &nbsp; Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/product/"><i className="fa fa-user"></i>&nbsp; Products</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/login"><i className="fa fa-user"></i>&nbsp; Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/cart"><i className="fa fa-cart"></i>&nbsp; Cart</a>
      </li>
     
      
     
    </ul>
   
  </div>
</nav>
        </>
    )
}

export default Header;