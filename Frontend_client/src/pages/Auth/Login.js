import React, { useEffect, useState } from 'react';
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { LoginAction } from "../../Action/authaction";
import {useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";
import "./Login.css";


const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [user,setUser] = useState({
        email: "",
        password: ""
    });


    const changeHandler = (e) => {
        const { name, value } = e.target;
        console.log(`change ${name} ${value}`);
        setUser({...user, [name]: value })
    }

    

    const Auth = async (user) => {
        try {
            console.log(user.email);
            const data = await fetch("http://localhost:7777/api/auth/login", { method: "POST", headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(user) }).then(response => response.json());
            console.log(data);
            if (data.success) {
                localStorage.setItem("token", data.token);
                console.log(data.token);
                alert("Login successful");
                window.location ="/home";

            } else {
                alert(data.message);
                window.location = "/login"

            }



        }
        catch (err) {
            alert("invalid email or password");
        }


    }

    return (
        <>
        
        <div className="Login">
        <Form className="form-container w-75 mt-5 m-auto " >

                <Form.Group className="mb-2 m-2" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={user.email} placeholder="Enter email" name="email" autoComplete="off" onChange={changeHandler} />
                    </Form.Group>
                <Form.Group className="mb-3 m-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={user.password} placeholder="Password" name="password" autoComplete="off" onChange={changeHandler} />
                </Form.Group>
                <Button variant="success" style={{ textAlign: "center", margin: "auto", display: "flex" }} type="button" onClick={()=>Auth(user)}>Login </Button>
                
                <Link to="/register"><Button>Create  Account</Button></Link>
            </Form>


            </div>
            </>
            
            )
            
        }


            export default Login;