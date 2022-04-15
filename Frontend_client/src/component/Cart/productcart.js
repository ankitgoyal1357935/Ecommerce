import React, { useState, useEffect}from 'react'
import {BsFillCartPlusFill} from "react-icons/bs";
import ReactStars from "react-rating-stars-component";
import $ from "jquery";
import "./productcart.css";
import { updateCart,removeCart } from '../../Action/cartAction/cartaction';
import { useDispatch } from 'react-redux';

const Productcart = ({product}) => {
    
  const dispatch = useDispatch();
    const [quantity,setQuantity]  = useState(product.quantity);
    const[del, setDel] = useState("");

    const increaseQuantity = () =>{
      if(product.productId.instock <=quantity)return;
      setQuantity(quantity+1);
      dispatch(updateCart({product:product.productId,quantity:quantity+1}))
    }

    const decreaseQuantity = () =>{
      if(1 >=quantity)return;
      setQuantity(quantity-1);
      dispatch(updateCart({product:product.productId,quantity:quantity-1}))
    }

    const options = {
      edit:false,
      color:"rgba(20,20,20,0.1)",
      activeColor: "tomato",
      isHalf:true,
      size:25

  };
   
   
  
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
                        <h4>Price: &#8377;{product.productId.price*quantity}/-</h4>
                      </div>
                      <div className="productcart-groupbtn">

                      <div className="productcart-quantity" >
                        <button  onClick ={increaseQuantity} name="incnum">+</button>
                        <input type="Number" readOnly className="form-control" value={quantity}></input>
                        <button  onClick ={decreaseQuantity} name="dececnum">-</button>
                    </div>
                      <div className="productcart-remove">
                        <button  className="btn btn-danger" onClick={()=>dispatch(removeCart(product.productId._id))}>Remove</button>
                      </div>
                      </div>

                    </div>
                    <div className="productcart-container3">
                      <h5>Delivery { new Date().toLocaleDateString()}</h5>
                    </div>
                    
                </div>
               
    </>
  )
}

export default Productcart