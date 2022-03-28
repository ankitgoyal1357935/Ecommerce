import React from 'react'

const Productcart = (props) => {
  return (
    <>
       <div style={{ width: "100%", height: '25%', display: "flex",justifyContent: "space-between"}}>

                    <div className="productcart" style={{ width: "33%", height: "100%",margin:"10px", display: "flex",flexDirection: "column", justifyContent: "space-between"}}>

                    <div>
                        <img src={props.imgsrc} alt={props.alt} style={{ width: "80%" }} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between"}}>
                        <button className="btn btn-primary" style={{ width: "40px", height: "40px", borderRadius: "50%" }} >+</button>
                        <input type="Number" className="form-control" style={{ width: "70px", height: "30px", textDecoration:"none" }}></input>
                        <button className="btn btn-primary" style={{ width: "40px", height: "40px", borderRadius: "50%" }} >-</button>
                    </div>
                    </div>
                </div>
                <hr/>
    </>
  )
}

export default Productcart