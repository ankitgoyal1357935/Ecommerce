import React, { useState, useEffect }from 'react';
import {useDispatch,useSelector} from "react-redux";
import Loader from "../../../component/Loader/Loader";
import{AUserGetAction} from "../../../Action/AdminAction/AUserAction";
import axios from "axios";


const AUserGet = () => {

    const dispatch = useDispatch();
    const {loading ,error , users}  = useSelector((state)=> state.AUserGetReducer);

useEffect(() => {
    dispatch(AUserGetAction())
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
                    {users && users.map(user =>
                         <tr>
                             <td>{user._id}</td>
                          <td>{user.username}</td>      
                          <td>{user.email}</td>      
                          <td>{user.isAdmin?"Admin":"User"}</td>
                          <td>{user.createdAt}</td>
                          </tr>
                        )}
                   
                    </tbody>
            </table>
        </div>
  )
}

export default AUserGet;