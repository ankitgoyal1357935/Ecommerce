import React, { useState, useEffect } from "react";
import Card from "../../component/Card/Card";
import "./Home.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "../../component/Home/Slider";
import { getProduct } from "../../Action/productAction/productaction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../component/Loader/Loader"

const Home = () => {
    
    const dispatch = useDispatch();
    const {loading,error,product} = useSelector((state )=> state.productReducer);
    useEffect(() => {
        dispatch(getProduct());

    }, [dispatch])


    return (
        <> 
        {loading?<Loader/>:
        <>
         <Slider />
            <div className="HomePage">
                <h2 className="HomePage-title">Latest Products</h2>
                <div className="HomePage-ProductList">
                    {product && product.map((p, i) => { return <Card product={p} key={p._id}/> })}
                </div>
            </div>
        </>
            }
        </>
    )
}

export default Home;