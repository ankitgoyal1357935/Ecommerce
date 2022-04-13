import React from 'react';
import { Link } from "react-router-dom";
import "./Sidebar/sidebarcss.css";

const Sidebar = () => {
    return (
        <div className="dashboard-sidebar">

            <div className="dashboard-sidebar-user">
                <Link to={"/dashboard/user"}>User</Link>
            </div>
            <div className="dashboard-sidebar-product">
                <Link to={"/dashboard/product"}>Product</Link>
            </div>

            <div className="dashboard-sidebar-order">
                <Link to={"/dashboard/order"}>Order</Link>
            </div>

            <div className="dashboard-sidebar-cart">
                <Link to={"/dashboard/cart"}>Cart</Link>
            </div>
        </div >
    )
}

export default Sidebar