import {Form,Button} from "react-bootstrap";
const Register = () => {

    return (
        <>
            <Form className="form-container w-75 mt-5 m-auto ">
            <Form.Group className="mb-2 m-2" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name"  name="name"/>
                </Form.Group>
                <Form.Group className="mb-2 m-2" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email"/>
                </Form.Group>
                <Form.Group className="mb-2 m-2" controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="Number" pattern="/[0-9]{5}/" placeholder="Enter Number" name="phone"/>
                </Form.Group>

                <Form.Group className="mb-3 m-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password"/> 
                </Form.Group>

                <Button variant="success" style={{ textAlign: "center", margin: "auto", display: "flex" }} type="submit">
                    SignUp
                </Button>
            </Form>
        </>
    )
}


export default Register;