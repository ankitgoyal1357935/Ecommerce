import React, { useState, useEffect}from 'react'

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