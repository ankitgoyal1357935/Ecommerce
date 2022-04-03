import React, { useState , useEffect}from 'react'
import Productcart from './productcart'
const Cartbox = ({ data }) => {
const[arr,setArr] = useState([]);

useEffect(() =>{
  setArr(data);
  console.log(data);
})
  return (
    <>
      <div className="cartbox" style={{ width: "70%", height: "80vh", display: "flex", flexDirection: "column", overflow: "auto" }}>
        {arr.map((product, i) => {
         return <Productcart imgsc={product.productId.imgsc} title={product.productId.title} desc={product.productId.desc} />
        })}

      </div>
    </>
  )
}

export default Cartbox