import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import Swal from 'sweetalert2';
import {useDispatch,useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';
import{RegisterAction } from "../../Action/authaction"
import "./Register.css";




const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector((state)=>state.RegisterReducer);
   const [users, setUsers] = useState({
       name:"",
       email:"",
       password:"",
        confirmPassword:""
   });

   
const changeHandler = (e) => {
    
        const{name , value} = e.target;
        console.log(`change ${name} ${value}`);
        setUsers({
            ...users,
            [name]:value
        })
}
    
    const register = async (user) => {
        

            if(user.email && user.password === user.confirmPassword){
             dispatch(RegisterAction(user));
                    
                navigate("/login");

        }else{
                    Swal.fire({
                        text: 'Register Failed',
                        failed: true
                    })
        }

            

    }





    return  (
        <>
        <div className="Register">

            <Form className="form-container w-75 mt-5 m-auto " >
                <Form.Group className="mb-2 m-2" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={users.name} placeholder="Enter name" name="name" onChange={changeHandler} />
                </Form.Group>
                <Form.Group className="mb-2 m-2" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={users.email} placeholder="Enter email" name="email" onChange={changeHandler} />
                </Form.Group>
                <Form.Group className="mb-3 m-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={users.password} placeholder="Password" name="password" onChange={changeHandler} />
                </Form.Group>

                <Form.Group className="mb-3 m-2" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" value={users.confirmPassword} placeholder="Password" name="confirmPassword" onChange={changeHandler} />
                </Form.Group>

                <Button variant="success" style={{ textAlign: "center", margin: "auto", display: "flex" }} type="submit" onClick={()=>register(users)}>
                    SignUp
                </Button>
            </Form>

        </div>
        </>
    )

}


export default Register;