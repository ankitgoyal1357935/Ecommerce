import React, { useState, useEffect }from 'react';
import {useDispatch,useSelector} from "react-redux";
import Loader from "../../../component/Loader/Loader";
import{AUserUpdateAction} from "../../../Action/AdminAction/AUserAction";
import axios from "axios";


const AUserUpdate = () => {

    const dispatch = useDispatch();
    const {loading ,error , user}  = useSelector((state)=> state.AUserUpdateReducer);

useEffect(() => {
    dispatch(AUserUpdateAction(id,user))
},[dispatch])

useEffect(() => {
    console.log(users && users);
})

  return loading?<Loader/>: (
        <div className="auserget">
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                
                         <tr>
                             <td>{user._id}</td>
                          <td>{user.username}</td>      
                          <td>{user.email}</td>      
                          <td>{user.isAdmin?"Admin":"User"}</td>
                          <td>{user.createdAt}</td>
                          </tr>
                        
                   
                    </tbody>
            </table>
        </div>
  )
}

export default AUserUpdate;