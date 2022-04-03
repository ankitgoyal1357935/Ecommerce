import React ,{useState,useEffect}from "react";
import Carde from "../../component/Card/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "../../component/Home/Slider";
import productlist from "../../products.json";

const Home = () => {
    const[dat , setDat] = useState([]);
   
    useEffect(() => {
        fetch("/api/product").then(response =>  response.json()).then(data =>{  
             setDat(data);
          
            
        });
        
    },[])
    
 
    return (
        <>
            <Slider />
            <br />
            <h1 className=" container-text-center"></h1>
            <br />
            <div className=" trend-prod-container fluid" style={{width: '90%', minHeight: '30vh',textAlign: "center", display: 'flex',justifyContent:"space-between", margin:"auto", flexWrap:"wrap"}}>
            {
    
                dat.map((product , i)=>{
            
            return <Carde product={product}/>
               
            }
        )}
        </div>
  
        </>
    )
}

export default Home;