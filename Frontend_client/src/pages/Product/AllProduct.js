import React, { useState, useEffect }from 'react'
import Card from "../../component/Card/Card";
import{getProduct} from "../../Action/productAction/productaction";
import "./AllProduct.css";
import Loader from "../../component/Loader/Loader";
import { useSelector, useDispatch} from 'react-redux';

const AllProduct = () => {

    const dispatch = useDispatch();
    const { loading, error, product } = useSelector((state) => state.productReducer);
    useEffect(() => {
        dispatch(getProduct());
        console.log(product);
    }, [dispatch])


    return loading?<Loader /> :(
        <>
            <div className="AllProduct">
                <div className="AllProduct-title">
                    <h1>All Products</h1>
                </div>
                <div className="AllProduct-ProductList">
                    {product && product.map((p, i) => { return <Card product={p} /> })}
                </div>
            </div>
        </>
    )
}

export default AllProduct