import React, { useState, useEffect } from "react";
import "./Product.css"
import { Row, Col, ListGroup, Button, Image, ListGroupItem } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../Action/productAction/productaction";
import Loader from "../../component/Loader/Loader";
import { BsFillCartPlusFill } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";
import {addCart} from "../../Action/cartAction/cartaction"


const Product = () => {

    const { id } = useParams();

    const dispatch = useDispatch();
    const { loading, product, error } = useSelector(state => state.productDetailReducer);
    

    const [cart, setCart] = useState("");
    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        isHalf: true,
        size: 25
    };

    const [quantity,setQuantity]  = useState(1);
    const[del, setDel] = useState("");


    const increaseQuantity = () =>{
      if(product.instock <=quantity)return;
      
      setQuantity(quantity+1);
    }

    const decreaseQuantity = () =>{
      if(1 >=quantity)return;
      
      setQuantity(quantity-1);
    }

    

    useEffect(() => {
        dispatch(getProductDetails(id));
    }, [dispatch, id])





   


    return loading ? <Loader /> : (
        <>
            <div className="productDetailContainer">

                <div className="productDC">
                    <div className="productDC-Image">
                        <img src={product.imgsc} />
                    </div>
                </div>
                <div className="productDC-2" >
                    <div className="productDC-title">
                        <h3>{product.title}</h3>
                    </div>
                    <hr />
                    <div className="productDC-rating">
                        <ReactStars {...options} value={product.rating} /><h6>(256 reviews)</h6>
                    </div>
                    <hr />
                    <div className="productDC-price">
                        <h4>Price: &#8377;{product.price}</h4>
                    </div>
                    <hr />
                    <div className="productDC-quantity">
                        <button onClick={increaseQuantity}>+</button>
                        <input  type="number" readOnly value={quantity}/>
                        <button onClick={decreaseQuantity}>-</button>
                    </div>
                    <hr />
                    <div className="productDC-description">
                        <h3>Description</h3>
                        <p>{product.desc}</p>
                    </div>
                </div>
                <div className="productDC-3">
                    <div className="productDC-status">
                        <span className="">Status:&nbsp;</span><h3 style={product.instock < 1 ? { color: "red" } : { color: "green" }}>{product.instock < 1 ? "OutOfStock" : "InStock"}</h3>
                    </div>
                    <br />

                <div className="productDC-addtocart">
                    <button className="btn btn-success" onClick={()=>dispatch(addCart({product,quantity}))} ><BsFillCartPlusFill />Add To Cart</button>
                </div>
                </div>

            </div>
      

        </>
    );
};


export default Product;