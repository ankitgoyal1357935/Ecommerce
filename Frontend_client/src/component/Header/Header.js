
import React, { useState, useEffect } from 'react';
import $ from "jquery";
import "./Header.css";
import SearchBox from "../SearchBox/searchbox";
import {getCart} from "../../Action/cartAction/cartaction"
import { useSelector,useDispatch } from 'react-redux';
import Loader from "../Loader/Loader"
const Header = () => {
  
  const dispatch = useDispatch();
 
  useEffect(()=>{
    dispatch(getCart());
  },[dispatch])

  const{products,loading,error} = useSelector((state)=>state.getCartReducer);

  
  console.log(products);
  console.log(loading);
  console.log(error);

  const token = localStorage.getItem("token");
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState([]);


  const changeHandler = (e) => {
    setSearch(e.target.value);
    $.ajax({
      url: `http://localhost:7777/api/product?cate=${e.target.value}`,
      type: 'GET',
      success: function (data, status) {
        console.log(data.products);
        if (e.target.value) {
          setProduct(data.products);
        } else {
          setProduct([]);
        }
      }
    });
  }

  return loading?<Loader/>: (

    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/home">Shoppkart</a>
        <form className="form-inline my-2 my-lg-0">
          <input id="#search" className="form-control w-100 mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={changeHandler} value={search} autoComplete="off" />
        </form>


        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/"><i className="fa fa-home"></i> &nbsp; Home </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/products/"><i className="fa fa-user"></i>&nbsp; Products</a>
            </li>
            {token ? (<>
              <li className="nav-item">
                <a className="nav-link" href="/logout"><i className="fa fa-user"></i>&nbsp; Logout</a>
              </li>
              <div className="dropdown">
                <a className="btn btn-dark " href="/cart">Cart<span className="badge badge-dark">{products.length>0?products.length:""}</span></a>
                <div className="dropdown-content">
                  <a href="/order">Order</a>
                  <a href="/account">Account</a>
                  <a href="/aboutus">About us</a>
                </div>
              </div>
            </>
            ) :
              (<>
                <li className="nav-item">
                  <a className="nav-link" href="/login"><i className="fa fa-user"></i>&nbsp; Login</a>
                </li>
                <li className="nav-item">
              <a className="nav-link" href="/cart"><i className="fa fa-cart"></i>&nbsp; Cart <span class="badge badge-dark">{products.length>0?products.length:""}</span></a>
            </li>

              </>
              )
            }
          


          </ul>

        </div>
      </nav>
      <SearchBox products={product} />

    </>
  )
}

export default Header;