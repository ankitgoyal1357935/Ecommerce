import React, { useState, useEffect } from "react";
import Cartbox from "../../component/Cart/cartbox";
import "./Cart.css";
import { Link, useParams } from "react-router-dom";
import Total from "../../component/Total/total"
import { useSelector, useDispatch} from "react-redux";
import {getCart} from "../../Action/cartAction/cartaction";
import Loader from "../../component/Loader/Loader"
import axios from "axios";

const Cart = (props) => {

    const [products,setProducts] = useState([])

    const getdata = async()=>{
        const Token = localStorage.getItem("token");
        const config ={
            method:"GET",
            url:"http://localhost:7777/api/cart/find",
            headers: {token:`Bearer ${Token}` ,'Content-Type': 'application/json'},
            responseType:"json"
        }
        
        const {data} = await axios(config);
            setProducts(data.cart.products);
        console.log(data);
    }
    useEffect(()=>{
        getdata();
    },[])

     
    

    return (

        <>
            <div className="Cart">
                <Cartbox data={products}/>
                <Total data={products}/>            
             
            </div>




        </>
    )
}

export default Cart;