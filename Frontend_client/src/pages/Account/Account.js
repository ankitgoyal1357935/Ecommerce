import React, { useState, useEffect }from 'react'
import {useDispatch,useSelector} from "react-redux";
import { getUserAction } from '../../Action/authaction';
import "./Account.css";
const Account = () => {

    const dispatch = useDispatch();
    const {user ,loading,error} = useSelector((state) => state.getUserReducer);


    useEffect(() => {
        dispatch(getUserAction());
    },[dispatch]);

    useEffect(() =>{
        console.log(user);
    })
    return (
        <>

            <div className="Account">
                <div className="User-Title">
                <h1>User Account</h1>
                </div>

                

                <div className="User-Details">
                    <label>Name: <span>{user.username}</span></label>
                    <label>Email: <span>{user.email}</span></label>
                    <label>Role: <span>{user.isAdmin?"Admin":"User"}</span></label>
                </div>
            </div>
        </>
    )
}

export default Account