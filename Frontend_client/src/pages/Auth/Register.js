import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";




const Register = () => {
   const [user, setUser] = useState({
       name:"",
       email:"",
       password:"",
        confirmPassword:""
   });

   
const changeHandler = (e) => {
        const{name , value} = e.target;
        console.log(`change ${name} ${value}`);
        setUser({
            ...user,
            [name]:value
        })
}
    
    const register = async () => {
        try{

            if(user.password === user.confirmPassword){
                
                const response = await fetch("http://localhost:7777/api/auth/register", { method: "POST", headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(user) });
                const data = await response.json();

                alert("Registration Successful");
                window.location ="/login";
                
            }else{
                alert("Password do not match"); 
            }

        }
        catch(err){
            alert(err.message);
        }
            

    }





    return  (
        <>
        <div className="container">

            <Form className="form-container w-75 mt-5 m-auto " >
                <Form.Group className="mb-2 m-2" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={user.name} placeholder="Enter name" name="name" onChange={changeHandler} />
                </Form.Group>
                <Form.Group className="mb-2 m-2" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={user.email} placeholder="Enter email" name="email" onChange={changeHandler} />
                </Form.Group>
                <Form.Group className="mb-3 m-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={user.password} placeholder="Password" name="password" onChange={changeHandler} />
                </Form.Group>

                <Form.Group className="mb-3 m-2" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" value={user.confirmPassword} placeholder="Password" name="confirmPassword" onChange={changeHandler} />
                </Form.Group>

                <Button variant="success" style={{ textAlign: "center", margin: "auto", display: "flex" }} type="submit" onClick={register}>
                    SignUp
                </Button>
            </Form>

        </div>
        </>
    )

}


export default Register;