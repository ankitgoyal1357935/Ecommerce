import React from "react";
import {Button} from"react-bootstrap";
import { Link } from "react-router-dom";


const Productview = (props) => {

    const queryParams = new URLSearchParams(window.location.search);
    const imgsrc = queryParams.get('imgsrc');
    const title = queryParams.get('title');
    const description = queryParams.get('description');
    console.log(title);
    console.log(description);
    return (

        <>
           
            <div className="container" style={{width:"80%", minHeight:"90vh", margin:"auto", display:"flex", justifyContent:"space-between"}}>
                    <div className="containte"  style={{ width:"40%" , height:"50vh",display:"flex",justifyContent:"flex-start" , flexDirection:"column"}}>
                <img src={imgsrc} style={{width:"100%"}} alt="not found" />
                    <Link to={`/cart?imgsrc=${imgsrc}&title=${title}&description=${description}`}> <Button  style={{backgroundColor:"black",color:"white", marginLeft:"30%"}}>Add to Cart</Button></Link>
                    </div>

                <div>
                    <h1>{title}</h1>
                    <br />
                    <h3>{description}</h3>
                </div>
            </div>
        </>
    )
}

export default Productview;