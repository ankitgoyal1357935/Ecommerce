import React ,{useState,useEffect}from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Form, Button, Nav } from "react-bootstrap";

const Login = () => {
const[email ,setEmail] = useState("");
const[password ,setPassword] = useState("");
const [log,setLog] = useState(false);

useEffect(()=>{
console.log(email);
console.log(password);
})

const addData = ()=>{
  let cred = {
    email,
    password
}
var loga = fetch("http://localhost:7777/api/auth/login",{method: "POST",headers: {'Accept': 'application/json','Content-Type': 'application/json'},body: JSON.stringify(cred)}).then(res => res.json()).then(data => data.json );
     
setLog(loga.success);

}

  return log==false? (
    <>
      <form >
        <div className="container container-fluid">

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  name ="email" onChange={(e)=>{setEmail(e.target.value)}} value ={email}/>

        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
        </div>
        </div>
       
        <button  className="btn btn-primary" onClick={addData}>Submit</button>
      </form>
      <Nav.Link href="/api/auth/register"> Create a new account</Nav.Link>

    </>
  ):(
    window.location.href = "/home"
  )
}


export default Login;