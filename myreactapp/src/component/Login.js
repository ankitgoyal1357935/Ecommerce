import {Form,Button} from "react-bootstrap";

const Login  = ()=>{

    return(
        <>
         <Form className="form-container w-75 mt-5 m-auto ">
  <Form.Group className="mb-2 m-2" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3 m-2" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Button variant="success" style={{textAlign: "center",margin:"auto", display: "flex"}} type="submit">
    Login
  </Button>
</Form>
        </>
    )
}


export default Login;