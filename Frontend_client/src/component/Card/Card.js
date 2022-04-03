
import React , { useState} from 'react';
import {Link} from "react-router-dom";
import { Card ,Button} from "react-bootstrap";
import "./card.css";


const Carde = ({product}) => {
    
const[cart, setCart] = useState("");
  
    const addToCart = async() =>{
        const Token = localStorage.getItem("token")

        const response = await fetch("http://localhost:7777/api/cart/",{method: "POST",headers: {token:`Bearer ${Token}` ,'Content-Type': 'application/json'},body: JSON.stringify(product)});
        const data = await response.json();
        
        setCart(data);
        console.log(data);
        
    }
    return (

        <>

       
                <Link to={`/product/${product._id}`}>

                <Card style={{ width: '300px', height: '500px', border: "1px solid black" , textAlign: "center" }} >
                    <Card.Img  className="cardim" variant="top" src={product.imgsc} style={{ margin:"auto",width:'80%', height: '40%', objectFit:"contain" }} />
                    <Card.Body >
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            {product.description}
                           
                        </Card.Text>
                        <h2><span>Price: </span><span>{product.price}</span></h2>
                        <Button onClick={addToCart} ><i className="fa fa-plus-circle"></i> cart</Button>
                    </Card.Body>
                  
                </Card>
                </Link>

           


        </>
    )
}



export default Carde;