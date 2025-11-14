import React, { useState } from "react";
import "./Home.css";
import ModeContext from "../context/Mode_context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
export const Register = () => {
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name:"",
  });

  const [error, setError] = useState({});
  const { isDarkMode } = useContext(ModeContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // console.log({ name, value });
    setFormData({ ...formData, [name]: value });
    // setFormData((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }))
    setError({...error, [name] : ""})
    setError((prevError) => {
      const newError = { ...prevError };
      delete newError[name];
      return newError;
    });
  };
  // console.log(formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
        console.log('if');
        
         localStorage.setItem("data", JSON.stringify(formData));
    navigate("/Layout");
    } else {
        console.log("else");
        
      alert("something went wrong!!");
      return;
    }
   
  };

  const validate = () => {
    const newError = {};
    if (!formData.userName.trim()) {
      newError.userName = "Username name is required!";
    }
    if (!formData.email.trim()) {
      newError.email = "Email is required!";
    }
    if (!formData.password.trim()) {
      newError.password = "Password is required!";
    }
    if (!formData.conPassword.trim()) {
      newError.conPassword = "Confirm Password is required!";
    } else if (formData.password !== formData.conPassword) {
      newError.conPassword = "Password and Confirm Password are not same!!";
    }
    setError(newError);
    return Object.keys(newError).length === 0;
  };

  return (
    <div className={`${!isDarkMode ? "nav" : "nav-light"}`}>
      <h1>Register</h1>
      <form action="" onSubmit={handleSubmit}>
        <label>User Name*</label>
        <br />
        <input type="text" name="userName" onChange={handleInputChange} />
        {error.userName && <p>{error.userName}</p>}
        <br />
        <label>Email*</label>
        <br />
        <input type="email" name="email" onChange={handleInputChange} />
        {error.email && <p>{error.email}</p>}

        <br />
        <label htmlFor="">Password*</label>
        <br />
        <input type="password" name="password" onChange={handleInputChange} />
        {error.password && <p>{error.password}</p>}
        <br />

        <label htmlFor="">Confim Password*</label>
        <br />
        <input
          type="password"
          name="conPassword"
          onChange={handleInputChange}
        />
        {error.conPassword && <p>{error.conPassword}</p>}
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  
  );
}
