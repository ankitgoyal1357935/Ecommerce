
import React, { useEffect, useState } from 'react';
import { Link, NavLink, } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader"
import { addCart } from "../../Action/cartAction/cartaction";

import "./card.css";


const Card = ({ product }) => {

    // const[, setCart] = useState("");
    const { loading, cart, error } = useSelector(state => state.addToCartReducer);
    const dispatch = useDispatch();
    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        isHalf: true,
        size: 25

    };



    return loading ? <Loader /> : (

        <>


            <div className="Card">
                <NavLink to={`/product/${product._id}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <div className="Card-image">
                        <img src={product.imgsc} />
                    </div>
                    <div className="Card-title" >
                        <h3>{product.title}</h3>
                    </div>
                    <div className="Card-rating">
                        <ReactStars {...options} value={product.rating} /><h6>(256 reviews)</h6>
                    </div>
                    <div className="Card-itemprice">
                        <h5>Price:<b>&#8377;{product.price}</b></h5>
                    </div>
                </NavLink>
                <div className="Card-addtocart">
                    <button className="btn btn-success" onClick={() => dispatch(addCart({ product, quantity: 1 }))}><BsFillCartPlusFill />Add To Cart</button>
                </div>

            </div>


        </>
    )
}



export default Card;