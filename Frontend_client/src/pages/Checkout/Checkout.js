import React, { useState, useEffect } from 'react';
import "./Checkout.css";
import city from "../../stateandcity.json";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../component/Loader/Loader"
import { getCart } from "../../Action/cartAction/cartaction";

const Order = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cities, setCities] = useState("");
  const [state, setState] = useState("");
  const { products, loading, error } = useSelector((state) => state.getCartReducer);
  const [shipinfo, setShipinfo] = useState({

    name: "",
    email: "",
    address: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    zipcode: ""
  })
  const [arr, setArr] = useState([]);
  const [sum, setSum] = useState(0);
  let total = 0;

  const shipping = sum > 1000 ? 0 : 100;
  const tax = sum * 0.18;
  const totalprice = shipping + tax + sum;


  useEffect(() => {
    setArr(Object.entries(city));
    console.log(state);
    console.log(cities);

  }, [state, cities])

  useEffect(() => {

    console.log(shipinfo);
  })
  useEffect(() => {
    products.map(p => {
      total += p.productId.price * p.quantity;
    })
    setSum(total);
    console.log(total);
  })
  useEffect(() => {
    dispatch(getCart());

  }, [dispatch])

  const proceedToPayment = () => {
    const data = {
      shipinfo,
      shipping,
      totalprice,
      tax,
      sum
    }
    console.log(data);
    sessionStorage.setItem("orderInfo", JSON.stringify(data));

    navigate("/payment/process");

  }


  const changeHandler = (e) => {

    const { name, value } = e.target;

    setShipinfo({
      ...shipinfo,
      [name]: value,


    })


  }
  return loading ? <Loader /> : (
    <div className='Order'>

      <form onSubmit={proceedToPayment}>
        <div className="container1">
          <h1>Shipping</h1>
          <p>Please enter your shipping details.</p>
          <hr />


          <div className="container fluid-container">
            <div className="form-group">
              <span className="field__label" for="Name">Name</span>
              <input className="form-control" type="text" id="Name" name="name" onChange={changeHandler} required />
            </div>
            <div className="form-group">
              <span className="field__label" for="Email">Email</span>
              <input className="form-control" type="text" id="Email" name="email" onChange={changeHandler} required />
            </div>
            <div className="form-group">
              <span className="field__label" for="address">Address</span>
              <input className="form-control" type="text" id="address" name="address" onChange={changeHandler} required />
            </div>
            <div className="form-group">
              <span className="field__label" for="phone">Phone</span>
              <input className="form-control" type="tel" id="phone" name="phone" onChange={changeHandler} required />
            </div>
            <div className="form-group">
              <span className="field__label" for="country">Country</span>
              <select className="form-control" id="country" name="country" onChange={changeHandler} required>
                <option value=""></option>
                <option value="IN">India</option>
              </select>
            </div>
            <div className="fluid-container d-flex justify-content-between flex-wrap" >
              <div className="form-group">
                <span className="field__label" for="state">State</span>

                <select id="state" name="state" onChange={(e) => {
                  setState(e.target.value)
                  changeHandler(e)

                }} value={state} className='form-control' required >
                  <option value='none'>State</option>

                  {arr.map((a, i) => {
                    return (
                      <>
                        <option key={a[0]}>{a[0]}</option>
                      </>
                    )
                  })}
                </select>
              </div>
              <div className="form-group">
                <span className="field__label" for="city">City</span>
                <select id="city" name="city" onChange={(e) => {
                  setCities(e.target.value);
                  changeHandler(e);
                }} value={cities} className='form-control' required >
                  <option value='none'>City</option>
                  {arr.filter(a => a[0] === state).map(a => {
                    return (
                      <>
                        {a[1].map(c => {
                          return (
                            <option value={c}>{c}</option>
                          )
                        }
                        )}

                      </>
                    )
                  })
                  }
                </select>
              </div>
              <div className="form-group">
                <span className="field__label" for="zipcode">Zip code</span>
                <input className="form-control" type="text" id="zipcode" name="zipcode" onChange={changeHandler} required />
              </div>

            </div>
           

          </div>


        </div>


        <div className='Order-summary'>
          <div className='Order-summary-title'>
            <h3>Order Summary</h3>
          </div>
          <hr />
          <div className='Order-summary-list'>
            <table >
              <thead>
                <tr>
                  <th>Item</th>
                  <th>price</th>
                  <th>quantity</th>
                </tr>
              </thead>
              <tbody>

                {products.map((p, i) => {
                  return (
                    <>
                      <tr>
                        <td><img src={p.productId.imgsc} style={{ width: '40px', height: '40px' }} /></td>
                        <td>&#8377;{p.productId.price}/- </td>
                        <td>{p.quantity}</td>
                      </tr>

                    </>
                  )
                })}

              </tbody>
            </table>

          </div>

          <div className="shippingCharge">
            <label for="shpchrg">Shipping charge</label>
            <span>{shipping == 0 ? "free" : shipping}</span>
          </div>

          <div className="tax">
            <label for="shpchrg">Tax:</label>
            <span>&#8377;{tax}</span>
          </div>

          <div className="totalprice">
            <label for="totalprice">Total:</label>
            <span>&#8377;{totalprice}/-</span>
          </div>

          <hr />

          <div className="form-group">
              <button className="btn btn-dark w-100" type="submit" >Proceed To Pay</button>
            </div>

    </div>
      </form>
      </div >
  

  )
}

export default Order