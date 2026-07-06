import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import register_image from "../assets/register_bg.jpg";

function Register() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  // navigate hook is called
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {

      const checkUser = await axios.get(
        `http://localhost:3000/users?email=${user.email}`
      );



      if (checkUser.data.length > 0) {
        alert("User already exists");
        return;
      }



      const result = await axios.post(
        "http://localhost:3000/users",
        user
      );


      localStorage.setItem(
        "user",
        JSON.stringify(result.data)
      );




      alert("Registration Successful");
      navigate("/login");

    } catch (err) {
      console.log(err);
    }
  };

  return (


    <div className="container-fluid  register-page d-flex justify-content-center align-items-center "  style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.16), rgba(0,0,0,0.6)), url(${register_image})`,
      }}>


      <div className="card p-4 mx-auto " style={{ maxWidth: "550px", width: "100%" }}>
        <h3 className="text-center fw-bold text-light mb-3">Create Account</h3>
        <form onSubmit={handleRegister}>
          <input type="text" className="form-control mb-3" placeholder="Name" onChange={(e) => setUser({ ...user, name: e.target.value }) }/>

          <input type="email" className="form-control mb-3" placeholder="Email" onChange={(e) =>setUser({ ...user, email: e.target.value }) } />

          <input type="password" className="form-control mb-3" placeholder="Password" onChange={(e) =>setUser({ ...user, password: e.target.value })}/>

          <button className="btn btn-success w-100" type="submit"> Register </button>

          <p className="mt-3 text-center  " > Already have an account? <Link to="/login" className="text-decoration-none text-warning"> Login</Link></p>  

        </form>


      </div>
    </div>


  );
}

export default Register;