import React, { useState, useEffect } from "react";
import Cartbox from "../../component/Cart/cartbox";
import "./Cart.css";
import { Link, useParams } from "react-router-dom";
import Total from "../../component/Total/total"
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "../../Action/cartAction/cartaction";
import  empty  from "../../images/empty.png"
import Loader from "../../component/Loader/Loader";
import axios from "axios";

const Cart = (props) => {

    const dispatch = useDispatch();
    const [arr, setArr] = useState([]);

    const token = localStorage.getItem("token");
    
    useEffect(() => {
        dispatch(getCart());
    },[dispatch]);

    useEffect(()=>{
        setArr(products);
    })
    const { products, loading, error } = useSelector((state) => state.getCartReducer);

   
    console.log(arr)
    return token?(
        <>
        {products && products.length > 0?(

            <div className="Cart">
                <Cartbox data={arr} />
                <Total data={arr} />
            </div>
                ):(
                    <div className="cart-empty">
                    <div className="cart-empty-box">
                      <h2>Cart Is Empty</h2>
      
                      <img src={empty}></img>
                          <Link to={'/products'}><button className="btn btn-danger">View Products</button></Link>
                    </div>
              </div>

                )}
        </>
    ):(
        <>
        <div className="cart-empty">
              <div className="cart-empty-box">
                <h2>Cart Is Empty</h2>

                <img src={empty}></img>
                    <Link to={'/login'}><button className="btn btn-danger">Login to see Cart</button></Link>
              </div>
        </div>
        </>
      )
}

export default Cart;