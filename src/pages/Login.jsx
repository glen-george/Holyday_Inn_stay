import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import bgImage from "../assets/login_bg.jpg";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


     const handleLogout = () => {
     localStorage.removeItem("currentUser");
     navigate("/login");
};




  const handleLogin = async (e) => {
    e.preventDefault();

 // Admin Login
  if (email === "admin@gmail.com" && password === "admin123") {
    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        email,
        role: "admin"
      })
    );

    navigate("/admin");
    alert("Admin Logged Succesfully")
    return;
  }

    console.log(email);
    console.log(password);



    try {
   const result = await axios.get(
  `http://localhost:3000/users?email=${email}`
);

 const user = result.data[0];

if (user && user.password === password) {

  localStorage.setItem(
    "currentUser",
    JSON.stringify(user)
  );

  alert("Login Successful");
  navigate("/hotels");

} else {
  alert("Invalid Credentials");


}
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }

 
  };




  return (

    <div
      className=" login-page container-fluid d-flex justify-content-center align-items-center"
      style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.16), rgba(0,0,0,0.6)), url(${bgImage})`,
  }}>
      <div className="login-box">
        <h1 className="text-center text-white fs-4 mb-3">
          Please Login Here
        </h1>



        <form onSubmit={handleLogin}>
          <input type="email"placeholder="Email" className="form-control inp-field" value={email} onChange={(e) => setEmail(e.target.value)}/>

          <input type="password" placeholder="Password" className="form-control inp-field mt-3" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button   type="submit"className="login-btn mt-3" > Login </button>

          <Link to="/register" className="create-new-acc-btn d-block mt-3"> Create New Account</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;