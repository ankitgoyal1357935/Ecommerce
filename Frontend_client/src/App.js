import React, { useState, useEffect }from 'react'
import './App.css';
import {
  BrowserRouter,
  Switch,
  Routes,
  Route
} from "react-router-dom";
import Header from "./component/Header/Header";
import Authheader from "./component/Header/Authheader";
import Footer from "./component/Footer/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Logout from "./pages/Auth/Logout";
import Register from "./pages/Auth/Register";
import Cart from "./pages/Cart/Cart";
import Product from"./pages/Product/Product";
import AllProduct from"./pages/Product/AllProduct";
import Order from"./pages/Order/Order.js";
import Error from "./pages/Error";
import Loader from "./component/Loader/Loader"
import{useSelector, useDispatch} from "react-redux";
import store from "./store";
function App() {

  return (
    <>
      
      <BrowserRouter>
      <Header/>
      <Routes >
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/cart" element={<Cart imgsc={"https://media.istockphoto.com/vectors/shopping-cart-icon-isolated-on-white-background-vector-id1206806317?s=612x612"} />} />
        <Route exact path="/cart/:id" element={<Cart imgsc={"https://media.istockphoto.com/vectors/shopping-cart-icon-isolated-on-white-background-vector-id1206806317?s=612x612"} />} />
        <Route exact path="/products" element={<AllProduct/>} />
        <Route exact path="/product/:id" element={<Product/>} />
        <Route exact path="/order" element={<Order/>} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/logout" element={<Logout/>} />
        <Route path="*" element={<Error />} />
      </Routes>
        <Footer />
      </BrowserRouter>
        
      
    </>
  )
}

export default App;
