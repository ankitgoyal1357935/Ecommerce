import React, { useState, useEffect } from "react";
import Cartbox from "../../component/Cart/cartbox";
import "./Cart.css";
import { Link, useParams } from "react-router-dom";
import Total from "../../component/Total/total"
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "../../Action/cartAction/cartaction";
import Loader from "../../component/Loader/Loader";
import axios from "axios";

const Cart = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);


    const { products, loading, error } = useSelector((state) => state.getCartReducer);

    return loading ? <Loader /> : (

        <>
            {products.length > 0 ? (

                <div className="Cart">
                    <Cartbox data={products} />
                    <Total data={products} />
                </div>


            ) : (
                    <>
                    <div className="Empty-cart">
                        <h1>Cart is Empty</h1>
                    </div>
                    
                    </>
            )}


        </>
    )
}

export default Cart;