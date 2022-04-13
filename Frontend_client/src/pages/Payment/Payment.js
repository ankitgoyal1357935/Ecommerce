import React, { useRef, useEffect } from 'react'
import { CardNumberElement, CardCvcElement, CardExpiryElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from 'axios';
import Swal from "sweetalert2"
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {getCart} from "../../Action/cartAction/cartaction";
import {myorder} from "../../Action/orderAction/orderaction"
import { useDispatch,useSelector } from 'react-redux';
import "./Payment.css";
import swal from 'sweetalert';
const Payment = () => {
  
  const{products,error } =useSelector((state)=> state.getCartReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const payBtn = useRef(null);

  const orderInfo = JSON.parse(sessionStorage.getItem('orderInfo'));
  

    useEffect(() => {
      dispatch(getCart());
    },[dispatch]);

  const paymentData = {
    amount: Math.round(orderInfo.totalprice * 100),
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    payBtn.current.disabled = true;
    try {
      const Token = localStorage.getItem("token");
      console.log(Token);
      const config = {
        headers: { token: `Bearer ${Token}`, 'Content-Type': 'application/json' },
      }

      const { data } = await axios.post("/api/v1/payment/process", paymentData, config);
      console.log(data);
      const client_secret = data.client_secret;
    
      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: orderInfo.shipinfo.name,
            email:  orderInfo.shipinfo.email,
            phone: orderInfo.shipinfo.phone,
            address:{
              line1: orderInfo.shipinfo.address,
              city: orderInfo.shipinfo.city,
              state: orderInfo.shipinfo.state,
              postal_code: orderInfo.shipinfo.zipcode,
              country: orderInfo.shipinfo.country,
            }
          },
        }
      });

      console.log(result);

      if (result.error) {
        payBtn.current.disabled = false;
        alert(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          console.log(result.paymentIntent.status);

          dispatch(myorder({order:orderInfo,products}))
          Swal.fire(
            'Payment Successful!',
            "Shoppkart",
            'success'
          )
          navigate("/home");

        }
        else {
          alert("Error: " + result.paymentIntent.status);
        }
      }
    }
    catch (error) {
      payBtn.current.disabled = false;
      alert(error.response.message);
    }
  }
  return (
    <>
      <div className="Payment">
        <div className="Payment-box">

          <form className="Payment-form" onSubmit={(e) => submitHandler(e)}>
            <div className="Payment-innerbox">

              <div className="Card-info">
                <h3>Card Info</h3>
              </div>
              <div>
                <BsFillCreditCard2FrontFill className="cardicon" />
                <CardNumberElement className="paymentinput form-control" />
              </div>
              <div>
                <CardExpiryElement className="paymentinput form-control" />
              </div>
              <div>
                <CardCvcElement className="paymentinput form-control" />
              </div>

              <input type="submit" value={`Pay - ${orderInfo && orderInfo.totalprice}`} ref={payBtn} className=" btn btn-dark paymentBtn" />

            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Payment