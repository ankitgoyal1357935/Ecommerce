import {Carousel} from "react-bootstrap";
import laptopfront from "../../images/laptopfront.jpg";
import cloths from "../../images/cloths.jpg";
import appleprod from "../../images/appleprod.jpg";
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
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={cloths}
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={appleprod}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
</div>
        
        </>

    )
}


export default Slider;