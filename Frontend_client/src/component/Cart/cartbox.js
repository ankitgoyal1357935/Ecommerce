import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import "./cartbox.css";
import{Link} from "react-router-dom";
import {getCart} from "../../Action/cartAction/cartaction";
import Loader from "../Loader/Loader";

import Productcart from './productcart';

const  Cartbox = ({data}) => {
  const [arr, setArr] = useState([]);

  
  
  useEffect(()=>{
    setArr(data)
  })

 
  return  (
    <>
      <div className="cartbox">
        <div className="cartbox-title">
          <h3>My Cart ({arr.length})</h3>
        </div>
        <div className="cartbox-mycart">

          {arr.map((product, i) => {
            return <Productcart product={product} key={product.productId._id} />
          })}
        </div>    
    </div>
      
    </>
  )
}

export default Cartbox