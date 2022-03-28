
import React from 'react';
import { Card } from "react-bootstrap";
import "./card.css"


const Carde = (props) => {


    return (

        <>

        <a href={`/productview?imgsrc=${props.imgsrc}&title=${props.title}&description=${props.description}`} style={{textDecoration:"none",color:"black"}}>

                <Card style={{ width: '12rem', border: "none", textAlign: "center" }} >
                    <Card.Img  className="cardim" variant="top" src={props.imgsrc} style={{width: '22vw', height: '16vh', objectFit:"cover"}} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.description}
                        </Card.Text>
                    </Card.Body>

                </Card>

            </a>


        </>
    )
}



export default Carde;