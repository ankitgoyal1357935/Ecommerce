import React from 'react'
import './App.css';
import {

  Routes,
  Route
} from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Cart from "./pages/Cart/Cart";
import Product from"./pages/Product/Product";
import Error from "./pages/Error"

function App() {


  return (
    <>

      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cart" element={<Cart imgsc={"https://media.istockphoto.com/vectors/shopping-cart-icon-isolated-on-white-background-vector-id1206806317?s=612x612"} />} />
        <Route exact path="/cart/:id" element={<Cart imgsc={"https://media.istockphoto.com/vectors/shopping-cart-icon-isolated-on-white-background-vector-id1206806317?s=612x612"} />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
