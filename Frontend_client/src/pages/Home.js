import React ,{useState,useEffect}from "react";
import Carde from "../component/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "../component/Slider";
import productlist from "../products.json";

const Home = () => {
    const[dat , setDat] = useState([]);
   
    useEffect(() => {
        fetch("/api/products").then(response =>  response.json()).then(data =>{  
             setDat(data);
          
            
        });
        
    },[dat])
    
 
    return (
        <>
            <Slider />
            <br />
            <h1 className=" container text-center"></h1>
            <br />
            <div className=" trend-prod container fluid" style={{width: '90%', minHeight: '30vh',textAlign: "center", display: 'flex',justifyContent:"space-between", margin:"auto", flexWrap:"wrap"}}>
            {
    
                dat.map((product , i)=>{
            
            return <Carde imgsrc={product.imgsc.toString()} title={product.title.toString()} description={product.desc.toString()} />
               
            }
        )}
        </div>
  
        </>
    )
}

export default Home;