import React from 'react'
import Productcart from './productcart'
const Cartbox = (props) => {
  return (
      <>
    <div className="cartbox" style={{ width:"70%", height:"80vh", display: "flex",flexDirection: "column", overflow: "auto" }}>
        <Productcart imgsrc={props.imgsrc} title={props.title} desc={props.desc}/>
        <Productcart imgsrc={props.imgsrc} title={props.title} desc={props.desc}/>
    
        <Productcart imgsrc={props.imgsrc} title={props.title} desc={props.desc}/>
    </div>
      </>
  )
}

export default Cartbox