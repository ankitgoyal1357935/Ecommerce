import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import "./total.css";
import {useSelector,useDispatch} from "react-redux";
import Loader from "../Loader/Loader"
import {getCart} from "../../Action/cartAction/cartaction";
const Total = ({ data }) => {
  
    const dispatch = useDispatch();
    const [arr, setArr] = useState([]);
    const[sum,setSum] = useState(0);
    useEffect(() => {
        dispatch(getCart());
    },[dispatch]);

    useEffect(()=>{
        tot();
        setArr(products);
    })
    const { products, loading, error } = useSelector((state) => state.getCartReducer);


 const tot = () => {
         let add = 0;
         const totalsum = arr.map(c => {
             add = add + (c.productId.price * c.quantity);
         });
         console.log(add);
        setSum(add);


        }
        console.log(arr);
        console.log(sum);

    return loading? <Loader/>: (
        <>
            <div className="Total">
                    <div className="Total-title">
                    <h2>Total Items</h2>
                </div>
                <div className="Total-priceitem">
                    <h4>Price:(Item {data.length})</h4>
                    
                    <ul>
                        {data.map(d => {
                          return  (
                                <li>{d.productId.price*d.quantity} *  {d.quantity} qty </li>
                                
                                
                            )
                        })}

                    </ul>

                </div>
                <hr />
                <div className="Total-Discount">
                    <h4>Discount: <b>30%</b></h4>
        
                </div>
                <hr />
                <div className="Total-shipping">
                    <h4>Shipping charge: <b>{sum>1000?"free":100} </b></h4>
                    <h4>{ }</h4>
                </div>
                <hr />
                <div className="Total-Sum">
                    <h3>Total:<b> &#8377;{sum}/-</b></h3>
                </div>
                    <hr/>
                <div className="cartbox-orderbtn">
                 <Link to='/checkout'><button className="btn btn-dark">Checkout</button> </Link>
                </div>   
            </div>
          
        </>
    )
}

export default Total