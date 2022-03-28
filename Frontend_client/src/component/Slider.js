import {Carousel} from "react-bootstrap";
import laptopfront from "../images/laptopfront.jpg";
import cloths from "../images/cloths.jpg";
import appleprod from "../images/appleprod.jpg";
import "./Slider.css" ;

const Slider = ()=>{

    return(
        <>
        <div className="Container">
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={laptopfront}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={cloths}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={appleprod}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
        
        </>

    )
}


export default Slider;