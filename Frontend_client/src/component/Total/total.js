import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import "./total.css";

const Total = ({ data }) => {
    const [sum, setSum] = useState(0);
        
    useEffect(() => {
         tot();
    })

 const tot = () => {
         let add = 0;
         const arr = data.map(c => {
             add = add + (c.productId.price * c.quantity);
         });
         console.log(add);
        setSum(add);

        }

    return (
        <>
            <div className="Total">
                    <div className="Total-title">
                    <h2>Total Items</h2>
                </div>
                <div className="Total-priceitem">
                    <h4>Price:(Item {data.length})</h4>

                </div>
                <hr />
                <div className="Total-Discount">
                    <h4>Discount: 30% </h4>
        
                </div>
                <hr />
                <div className="Total-shipping">
                    <h4>Shipping charge:  &#8377;40</h4>
                    <h4>{ }</h4>
                </div>
                <hr />
                <div className="Total-Sum">
                    <h3>Total: &#8377;{sum}</h3>
                </div>
                    <hr/>
                <div className="cartbox-orderbtn">
                 <Link to='/orders'><button className="btn btn-dark">Place Order</button> </Link>
                </div>   
            </div>
          
        </>
    )
}

export default Total