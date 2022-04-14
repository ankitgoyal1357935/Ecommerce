import React, { useState, useEffect } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Header from "./component/Header/Header";
import Authheader from "./component/Header/Authheader";
import Footer from "./component/Footer/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Logout from "./pages/Auth/Logout";
import Register from "./pages/Auth/Register";
import Cart from "./pages/Cart/Cart";
import Product from "./pages/Product/Product";
import AllProduct from "./pages/Product/AllProduct";
import Checkout from "./pages/Checkout/Checkout.js";
import Dashboard from "./pages/Admin/Dashboard.js";
import AdminUser from './pages/Admin/AdminUser';
import AdminProduct from './pages/Admin/AdminProduct';
import AdminOrder from './pages/Admin/AdminOrder';
import AdminCart from './pages/Admin/AdminCart';
import Order from "./pages/Order/Order.js";
import Account from "./pages/Account/Account.js";
import Error from "./pages/Error";
import Payment from "./pages/Payment/Payment"
import Loader from "./component/Loader/Loader";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector, useDispatch } from "react-redux";
import { getUserAction } from './Action/authaction';
import AUserGet from "./component/Dashboard/User/AUserGet";
import AUserUpdate from "./component/Dashboard/User/AUserUpdate";
import AProductAdd from "./component/Dashboard/Product/AProductAdd";

function App() {


  const [stripeApiKey, setStripeApiKey] = useState("");

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.getUserReducer);

  const token = localStorage.getItem("token");



  async function getStripeApiKey() {
    const Token = localStorage.getItem("token");
    const config = {
      method: "GET",
      url: "http://localhost:7777/api/v1/stripeapikey",
      headers: { token: `Bearer ${Token}`, 'Content-Type': 'application/json' },
      responseType: "json"
    }
    const { data } = await axios(config);
    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    dispatch(getUserAction());
  }, [dispatch]);

  useEffect(() => {
    getStripeApiKey();


  })

  return (
    <>
      <div className="App">


        <Router>
          <Header />
          <Routes>
            <Route path="/dashboard" element={user && user.isAdmin ? <Dashboard /> : <Home />} exact >
              <Route path="user" element={<AdminUser />}>
                <Route path="getuser" element={<AUserGet />} />
                <Route path="updateuser/:id" element={<AUserUpdate />} />
               </Route>
               <Route path="product" element={<AdminProduct />} >
              {/* <Route path="getproduct" element={<AProductGet />} />
                <Route path="updateproduct" element={<AProductUpdate />} />
                <Route path="deleteproduct" element={<AProductDelete />} /> */}
                <Route path="addproduct" element={<AProductAdd />} />
                </Route>
            </Route>

            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/cart" element={<Cart imgsc={"https://media.istockphoto.com/vectors/shopping-cart-icon-isolated-on-white-background-vector-id1206806317?s=612x612"} />} />
            <Route exact path="/cart/:id" element={<Cart imgsc={"https://media.istockphoto.com/vectors/shopping-cart-icon-isolated-on-white-background-vector-id1206806317?s=612x612"} />} />
            <Route exact path="/products" element={<AllProduct />} />
            <Route exact path="/product/:id" element={<Product />} />
            <Route exact path="/order" element={<Order />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/logout" element={<Logout />} />
            <Route exact path="/account" element={<Account />} />
            <Route path="/payment/process" element={stripeApiKey && token &&
              <Elements stripe={loadStripe(stripeApiKey)}> <Payment /> </Elements>} exact />
            <Route path="*" element={<Error />} />
          </Routes>


          <Footer />
        </Router>


      </div>
    </>
  )
}

export default App;
