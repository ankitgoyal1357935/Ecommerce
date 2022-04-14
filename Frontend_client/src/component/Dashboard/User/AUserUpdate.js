import React, { useState, useEffect }from 'react';
import {useDispatch,useSelector} from "react-redux";
import Loader from "../../../component/Loader/Loader";
import{AUserUpdateAction} from "../../../Action/AdminAction/AUserAction";
import {AUserGetByIdAction} from "../../../Action/AdminAction/AUserAction";
import { useParams } from 'react-router-dom';
import axios from "axios";


const AUserUpdate = () => {
        const {id} = useParams();
    const dispatch = useDispatch();
    const {loading ,error , user}  = useSelector((state)=> state.AUserGetByIdReducer);
    const[userrole,setUserrole] = useState({isAdmin:false});

useEffect(() => {
    dispatch(AUserGetByIdAction(id))
},[dispatch])

useEffect(() => {
    console.log(user && user);
    console.log(userrole);
})

const changeUserrole = (id,userrole) => {
    dispatch(AUserUpdateAction(id,userrole))
    window.location.reload();
}

const changeHandler = (e)=>{
        setUserrole({isAdmin:!userrole.isAdmin} )

        
}

  return loading?<Loader/>: (
        <div className="auserupdate">
          <div className="auserupdate-role">
              <h2>User Role is {user && user.isAdmin?"Admin":"User"}</h2>
              <label>Change Role to Admin: </label>
            <input type="checkbox" onChange={changeHandler} name="isAdmin" value={userrole.isAdmin}/>  
            
          </div>

          <button className="btn btn-success" onClick={()=>changeUserrole(id,userrole)}>Update</button>
        </div>
  )
}

export default AUserUpdate;