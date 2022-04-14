import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AProductAddAction } from "../../../Action/AdminAction/AProductAction";
import "./AProductAdd.css";


const AprodAdd = () => {


  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.AProductAddReducer);
  const [prod, setProd] = useState({
    title: "",
    desc: "",
    imgsc: "",
    category: "",
    brand: "",
    price: 0,
    rating: 0,
    instock: 0,
  })


  const changeHandler = (e) => {
    console.log([e.target.name] + "  " + e.target.value);
    setProd({
      ...prod,
      [e.target.name]: e.target.value,
    })
  }

  const addProduct = (prod) => {

    dispatch(AProductAddAction(prod));
  }


  return (
    <div className="Aprodadd">
      <lable className="Aprodadd-title" for="title">Title:
        <input type="text" name="title" id="title" value={prod.title} onChange={changeHandler} />
      </lable>
      <lable className="Aprodadd-desc" for="desc">Description:
        <input type="text" name="desc" id="desc" value={prod.desc} onChange={changeHandler} />
      </lable>
      <lable className="Aprodadd-imgsc" for="imgsc">:Image:
        <input type="text" name="imgsc" id="imgsc" value={prod.imgsc} onChange={changeHandler} />
      </lable>
      <lable className="Aprodadd-category" for="category">Category:
        <input type="text" name="category" id="category" value={prod.category} onChange={changeHandler} />
      </lable>
      <lable className="Aprodadd-brand" for="brand">Brand:
        <input type="text" name="brand" id="brand" value={prod.brand} onChange={changeHandler} />
      </lable>
      <lable className="Aprodadd-price" for="price">Price:
        <input type="Number" name="price" id="price" value={prod.price} onChange={changeHandler} />
      </lable>
      <lable className="Aprodadd-rating" for="rating">Rating:
        <input type="Number" max={5} min={0} name="rating" id="rating" value={prod.rating} onChange={changeHandler} />
      </lable>
      <lable className="Aprodadd-instock" for="instock">Stock:
        <input type="text" name="instock" id="instock" value={prod.instock} onChange={changeHandler} />
      </lable>
      <button className="btn btn-info" onClick={()=>addProduct(prod)}>Add product</button>
    </div>
  )
}

export default AprodAdd