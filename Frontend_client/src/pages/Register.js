import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";




const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rend, setRend] = useState(null);
     

   

    const doit = async() => {
        const m = await register();
            setRend(m);

    }
    const register = async () => {
        let cred = {
            name,
            email,
            password
        }
        var r = await fetch("http://localhost:7777/api/auth/register", { method: "POST", headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(cred) }).then(data => {
            return data.json();
        })
        return r;

    }




    return rend==null? (
        <>
            <Form className="form-container w-75 mt-5 m-auto " >
                <Form.Group className="mb-2 m-2" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={name} placeholder="Enter name" name="name" onChange={(e) => { setName(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-2 m-2" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} placeholder="Enter email" name="email" onChange={(e) => { setEmail(e.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3 m-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} placeholder="Password" name="password" onChange={(e) => { setPassword(e.target.value) }} />
                </Form.Group>

                <Button variant="success" style={{ textAlign: "center", margin: "auto", display: "flex" }} type="button" onClick={doit}>
                    SignUp
                </Button>
            </Form>

        </>
    ):(
        window.location.href = "/api/auth/login"
        )

}


export default Register;