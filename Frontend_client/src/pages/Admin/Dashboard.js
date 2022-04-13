import React from 'react'
import "./Dashboard.css";
import { Outlet } from 'react-router-dom';
import Sidebar from "../../component/Dashboard/sidebar"
const Dashboard = () => {
  return (
    <>
    <div className="dashboard">

    <div className="dashborad-title">
        <h1>Admin Panel</h1>
    </div>
    <div className="dashborad-container">

    <Sidebar/>
    <Outlet/>
    </div>
    </div>
    </>
  )
}

export default Dashboard