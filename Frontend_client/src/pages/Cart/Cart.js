import React, { useState, useEffect } from "react";
import Cartbox from "../../component/Cart/cartbox";
import{Link,useParams} from "react-router-dom"


const Cart = (props) => {
    
    const[cart , setCart] = useState([]);
  
    useEffect(async() => {
        const Token = localStorage.getItem("token")

         const response = await fetch(`/api/cart/find`,{method: 'GET', headers: {token:`Bearer ${Token}`, 'Content-Type': 'application/json'}});
         const data = await response.json();
                setCart(data.products);
      
      
       },[])

    return (

        <>
            
            
                     <Cartbox data={cart}/>

            
           

        </>
    )
}

export default Cart;