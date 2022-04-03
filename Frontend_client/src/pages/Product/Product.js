

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Product.css"
import {Row, Col , ListGroup , Button, Image, ListGroupItem} from 'react-bootstrap';
import {Link ,useParams } from 'react-router-dom'

const Product = () => {
    const {id}=useParams();
   
    const[product , setProduct] = useState([]);
    const[cart, setCart] = useState("");

    useEffect(() => {
        console.log(id);
        let url = ""
        if(id == undefined){
            url = `/api/product`
        }else{
            url = `/api/product/find/${id}`
        }
        fetch(url).then(response =>  response.json()).then(data =>{  
              data =   Array.isArray(data)?data:[data];
             setProduct(data);
                console.log(product);
            
        });
        
    },[])

  
    const addToCart = async(e) =>{
        const Token = localStorage.getItem("token")
        console.log(e.target.id);

         const response = await fetch("http://localhost:7777/api/cart/",{method: "POST",headers: {token:`Bearer ${Token}` ,'Content-Type': 'application/json'},body: JSON.stringify(product[e.target.id])});
         const data = await response.json();
        
         setCart(data);
         console.log(data);
        
    }
   
    
    return (
        <>
        {product.map((p,i)=>{
            console.log(p);
           return <div  className="productContainer">
        <Link to="/" className="btn btn-light">
            <i class="fas fa-arrow-left"></i>
            &nbsp; Go Back</Link>
        <Row>
            <Col md={6}>
                <Image src={p.imgsc} alt={product.title} fluid/>
            </Col>

            <Col md={3}>
                <ListGroup variant="flush">
                    <ListGroupItem>
                     <h3>{p.title}</h3>
                    </ListGroupItem>
                    <ListGroupItem>
                       
                    </ListGroupItem>
                    <ListGroupItem>
                        Price: &#8377;{p.price}
                    </ListGroupItem>
                    <ListGroupItem>
                        Description: &#8377;{p.desc}
                    </ListGroupItem>
                </ListGroup>
            </Col>
            <Col md={3}>
                <ListGroupItem>
                    <Row>
                        <Col>Status :</Col>
                        <Col>{p.instock ? "In Stock" : "out of stock"}</Col>
                    </Row>

                </ListGroupItem>
                <ListGroupItem>
                    <Button id={i} className="btn-block" type="button" onClick={addToCart}>
                     Add to Cart
                    </Button>
                </ListGroupItem>
            </Col>
        </Row>

    </div>
    })}
        </>
  );
};


export default Product;