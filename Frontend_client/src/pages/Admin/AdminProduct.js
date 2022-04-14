import React from 'react';
import "./AdminProduct.css";
import{NavLink,Outlet} from "react-router-dom";
import AProductAdd from "../../component/Dashboard/Product/AProductAdd";

const AdminProduct = () => {
  return (
    <div className="admin-product">
          <ul>
            <li><NavLink to="/dashboard/product/addproduct">Add Product</NavLink></li>
           
           
          </ul>
        <Outlet/>
    </div>
  )
}

export default AdminProduct