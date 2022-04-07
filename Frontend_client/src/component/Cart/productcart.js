import React, { useState, useEffect}from 'react'
import {BsFillCartPlusFill} from "react-icons/bs";
import ReactStars from "react-rating-stars-component";
import $ from "jquery";
import "./productcart.css";

const Productcart = ({product}) => {
    
    const [quantity,setQuantity]  = useState(1);
    const[del, setDel] = useState("");

    const increaseQuantity = () =>{
      if(product.productId.instock <=quantity)return;
      setQuantity(quantity+1);
    }

    const decreaseQuantity = () =>{
      if(1 >=quantity)return;
      setQuantity(quantity-1);
    }

    const options = {
      edit:false,
      color:"rgba(20,20,20,0.1)",
      activeColor: "tomato",
      isHalf:true,
      size:25

  };
   
    const removeToCart=()=>{
     const Token = localStorage.getItem("token"); 
     console.log(product.productId._id);
      $.ajax({
        url: `http://localhost:7777/api/cart/product/${product.productId._id}`,
        type:"DELETE",
        headers: {token:`Bearer ${Token}`, "Content-Type": "application/json"},
        success: function(data) {
          setDel(data);
          window.location.reload();
         
        }
      })
    }
  
  return (
    <>
       <div className="productcart">

                    <div className="productcart-container" >

                    <div className="productcart-image">
                        <img src={product.productId.imgsc} alt={product.productId.alt}  />
                    </div>
                   
                    </div>
                    <div className="productcart-container2">
                      <div className="productcart-title">
                        <h5>{product.productId.title}</h5>
                      </div>
                      <div className="productcart-rating">
                      <ReactStars {...options}  value={product.productId.rating} />            
                  </div> 
                      <div className="productcart-price">
                        <h4>Price: &#8377;{product.productId.price*product.quantity}/-</h4>
                      </div>
                      <div className="productcart-groupbtn">

                      <div className="productcart-quantity" >
                        <button  onClick ={increaseQuantity} name="incnum">+</button>
                        <input type="Number" readOnly className="form-control" value={product.quantity}></input>
                        <button  onClick ={decreaseQuantity} name="dececnum">-</button>
                    </div>
                      <div className="productcart-remove">
                        <button  className="btn btn-danger" onClick={removeToCart}>Remove</button>
                      </div>
                      </div>

                    </div>
                    <div className="productcart-container3">
                      <h5>Delivery { new Date().toUTCString()}</h5>
                    </div>
                    
                </div>
               
    </>
  )
}

export default Productcart