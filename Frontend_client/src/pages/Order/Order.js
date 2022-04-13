import React , { useState, useEffect }from 'react'
import { getMyOrder } from '../../Action/orderAction/orderaction';
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import empty from "../../images/empty.png"
import "./Order.css";
import Loader from "../../component/Loader/Loader";

const Order = () => {

    const dispatch = useDispatch();
    const {loading, error, Order} = useSelector((state)=> state.getMyOrderReducer);

    const token  = localStorage.getItem("token");

    useEffect(() => {
        dispatch(getMyOrder());
        console.log(Order);
        console.log(loading);
    },[dispatch])

    useEffect(() =>{
        console.log(Order);
    },[Order])


  return Order&&Order.length!=0?(
    <div className="OrderPage">
            <div className="Orderpage-title">
                <h1>Orders</h1>
            </div>

            <div className="Orderpage-list">
                <table border="1">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th> amount</th>
                            <th>status</th>
                            <th> delivery time</th>

                        </tr>
                    </thead>
                    <tbody>
                        {Order && Order.map(item => {

                                  return (
                                      <>
                                      <tr>
                                        <td>
                                            <ul>
                                                <li><b>Image</b> <b>Title</b> <b>Quantity</b></li>
                                                {item.products.map(product => {

                                                   return(
                                                   <> 
                                                   <li><img src={product.productId.imgsc}/> &nbsp; <p>{product.productId.title}</p> &nbsp; <p>{product.quantity}</p>  </li>
                                                   <hr/>
                                                   </>
                                                   )
                                        
                                                })}
                                            </ul>

                                        </td>
                                        <td>{item.amount}</td>
                                        <td>{item.status}</td>
                                        <td>{item.createdAt}</td>

                                    </tr>
                                    </>
                                  ) 
                        })}
                    </tbody>
                </table>
            </div>



    </div>

        
  ):(
    <>
    <div className="cart-empty">
          <div className="cart-empty-box">
            <h2>Orders</h2>

            <img src={empty}></img>
                <Link to={'/cart'}><button className="btn btn-danger">No Orders yet</button></Link>
          </div>
    </div>
    </>
  )
}

export default Order