
import React, { useState, useEffect } from 'react';
import $ from "jquery";
import "./Header.css";
import { Link,useNavigate } from 'react-router-dom';
import SearchBox from "../SearchBox/searchbox";
import {getCart} from "../../Action/cartAction/cartaction"
import { useSelector,useDispatch } from 'react-redux';
import {getUserAction} from "../../Action/authaction";
import Loader from "../Loader/Loader"
const Header = () => {
  
  const dispatch = useDispatch();
  const {user} = useSelector((state)=>state.getUserReducer);
 
  useEffect(()=>{
    dispatch(getCart());
    dispatch(getUserAction());
  },[dispatch]);



  const{products,loading,error} = useSelector((state)=>state.getCartReducer);
    console.log(products);

  const token = localStorage.getItem("token");
  const [search, setSearch] = useState("");
  const [product, setProduct] = useState([]);


  const changeHandler = (e) => {
    setSearch(e.target.value);
    $.ajax({
      url: `http://localhost:7777/api/product?cate=${e.target.value}`,
      type: 'GET',
      success: function (data, status) {
   
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
        <Link className="navbar-brand" to="/home">Shoppkart</Link>
        <form className="form-inline my-2 my-lg-0">
          <input id="#search" className="form-control w-100 mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={changeHandler} value={search} autoComplete="off" />
        </form>


        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/"><i className="fa fa-home"></i> &nbsp; Home </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products/"><i className="fa fa-user"></i>&nbsp; Products</Link>
            </li>
            {token ? (<>
              <li className="nav-item">
                <Link className="nav-link" to="/logout"><i className="fa fa-user"></i>&nbsp; Logout</Link>
              </li>
              <div className="dropdown">
                <Link className="btn btn-dark " to="/cart">Cart<span className="badge badge-dark">{products && products.length>0?products.length:""}</span></Link>

                <div className="dropdown-content">
                  <Link to="/order">Order</Link>
                  <Link to="/account">Account</Link>
                  { user && user.isAdmin?(
                    <>
                    <Link to="/dashboard">Dashboard</Link>
                    </>
                  ):""}
               </div>
              </div>
            </>
            ) :
              (<>
                <li className="nav-item">
                  <Link className="nav-link" to="/login"><i className="fa fa-user"></i>&nbsp; Login</Link>
                </li>
                <li className="nav-item">
              <Link className="nav-link" to="/cart"><i className="fa fa-cart"></i>&nbsp; Cart </Link>
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