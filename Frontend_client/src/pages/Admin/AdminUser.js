import React from 'react';
import{NavLink,Outlet} from "react-router-dom";
import AUserGet from "../../component/Dashboard/User/AUserGet";
const AdminUser = () => {
  return (
    <div className="admin-user">

          <ul>
            <li><NavLink to="/dashboard/user/getuser">Get User</NavLink></li>
            <li><NavLink to="/dashboard/user/updateuser">Update User</NavLink></li>
            <li><NavLink to="/dashboard/user/deleteuser">Delete User</NavLink></li>
          </ul>
        <Outlet/>
      </div>

    
  )
}

export default AdminUser