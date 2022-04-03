import React from 'react'
import "./productcart.css"
const Productcart = (props) => {
  const num = 0;
  return (
    <>
       <div className="productcart">

                    <div className="productcart-container" >

                    <div className="productcart-image">
                        <img src={props.imgsc} alt={props.alt}  />
                    </div>
                    <div className="productcart-quantity" >
                        <button className="btn btn-primary" >+</button>
                        <input type="Number" className="form-control" value={num}></input>
                        <button className="btn btn-primary" >-</button>
                    </div>
                    </div>
                    
                </div>
                <hr/>
    </>
  )
}

export default Productcart