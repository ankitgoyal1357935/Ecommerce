import React from "react";
import Cartbox from "../component/cartbox";



const Cart = (props) => {


    const queryParams = new URLSearchParams(window.location.search);
    const imgsrc = queryParams.get('imgsrc');
    const title = queryParams.get('title');
    const description = queryParams.get('description');


    return (

        <>
        <Cartbox imgsrc={imgsrc} title={title} description={description}/>
        </>
    )
}

export default Cart;