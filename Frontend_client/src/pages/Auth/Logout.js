import React, { useState, useEffect}from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LogoutAction } from '../../Action/authaction';
const Logout = () => {

  useEffect(() => {
    localStorage.removeItem("token");
    window.location ="/";
})

  return (
    <>
    <h1>Logging Out</h1>
    </>
    
  )
}

export default Logout