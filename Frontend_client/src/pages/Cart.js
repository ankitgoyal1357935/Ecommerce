import React from "react";



const Cart =(props)=>{

    
    const queryParams = new URLSearchParams(window.location.search);
    const imgsrc = queryParams.get('imgsrc');
  
  
return(

    <>
    <div style={{width: '100vw',minHeight:"90vh", margin:"10px",height: '30vh'}}>

    <div style={{ backgroundColor:"gray",width: "70%", height: '20vh', display: "flex", justifyContent:"flex-start"}}>

    <img src={imgsrc} alt={props.alt} style={{width:"20%"}}/>
      
    </div>
    </div>
    </>
)
}

export default Cart;