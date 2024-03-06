import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState,useEffect } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    const auth =localStorage.getItem('user');
    if(auth){
      navigate("/");
    }
   })
  
  const handelLogin = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    
try{

  let response = await fetch("http://localhost:3001/Login", {
    method: "post",
    body: JSON.stringify({ name, password, email }),
    headers: { "Content-Type": "application/json" },
  });
  
  response = await response.json();
  console.warn(response);
  // console.log(response._doc.name);
  setMessage(response.message);
  
  if (response.message == "success") {
    localStorage.setItem("user", response._doc.name);
  }
  console.warn(response);
}catch(err){
  setMessage("server error")
  setTimeout(() => {
    navigate("/Error")
    
  }, 2000);
}
};

  return (
    <div id="signup">
      <div>
        <h1>Login</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={handelLogin} type="button">
          Submit
        </button>
        <Link to="/Signup"> Signin</Link>
        {message && <p> {message}</p>} {/* Display message if not empty */}
      </div>
    </div>
  );
};
export default Login;
