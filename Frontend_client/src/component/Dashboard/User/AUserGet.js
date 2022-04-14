import React, { useState, useEffect }from 'react';
import {useDispatch,useSelector} from "react-redux";
import Loader from "../../../component/Loader/Loader";
import{AUserGetAction,AUserDeleteByIdAction} from "../../../Action/AdminAction/AUserAction";
import {Link}  from "react-router-dom";
import axios from "axios";


const AUserGet = () => {

    const dispatch = useDispatch();
    const {loading ,error , users}  = useSelector((state)=> state.AUserGetReducer);

useEffect(() => {
    dispatch(AUserGetAction())
},[dispatch,error])




const deleteUser = (e) =>{
        dispatch(AUserDeleteByIdAction(e.target.value));
        window.location.reload();
}

useEffect(() => {
    console.log(users && users);
},[deleteUser])


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
                        <th>Edit</th>
                        <th>Delete</th>
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
                          <td><Link to={`/dashboard/user/updateuser/${user._id}`} className="btn btn-info">Edit</Link></td>
                          <td><button onClick={deleteUser} className="btn btn-danger" value={user._id}>Delete</button></td>
                          </tr>
                        )}
                   
                    </tbody>
            </table>
        </div>
  )
}

export default AUserGet;