import React from 'react'
import "./searchbox.css";
const Searchbox = ({ products }) => {
    console.log(products);
    return (
        <>
            <div className="searchbox-container">
                <table border="1" className="searchbox-table" >
                    {products.map(product => {
                        return (
                            <>
                                <tr id={product.id} className="searchbox-trow" >
                                    <td><img className="searchbox-image" src={product.imgsc} /></td>
                                    <td><h6>{product.title}</h6></td>
                                    <td><h6>&#8377;{product.price}</h6></td>
                                </tr>
                            </>
                        )
                    })}
                </table>
            </div>
        </>
    )
}

export default Searchbox