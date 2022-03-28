import React from 'react';
import "./ReactBody.css"
import {

    Routes,
    Route
  } from "react-router-dom";
  import Home from '../pages/Home';
  import Login from '../pages/Login';
  import Productview from '../pages/Productview';
  import Cart from '../pages/Cart';
  import Register from '../pages/Register';
  import Error from '../pages/Error';

const ReactBody = () => {
  return (
    <>
    <div className="bod">

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/api/auth/login" element={<Login />} />
      <Route exact path="/cart" element={<Cart imgsc={"https://media.istockphoto.com/vectors/shopping-cart-icon-isolated-on-white-background-vector-id1206806317?s=612x612"} />} />
      <Route exact path="/productview" element={<Productview />} />
      <Route exact path="/api/auth/register" element={<Register />} />
      <Route  path="*" element={<Error/>} />
    </Routes> 


    </div>
    
    
    </>
  )
}

export default ReactBody