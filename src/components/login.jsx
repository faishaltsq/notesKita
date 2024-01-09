/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom"; // Add this line

const Login = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        
        const navigate = useNavigate();
        const handleLogin = () =>{
            if(email.length === 0){
                alert("Email tidak boleh kosong")
            } else if(password.length === 0){
                alert("Password tidak boleh kosong")
            } else {
                axios.post("http://localhost:3000/login",{
                    email: email,
                    password: password
                })
                .then(function (response){
                    console.log(response);
                    navigate("/notes")
                })
                .catch(function (error){
                    console.log(error);
                    if(error.response.status === 401){
                        alert("invalid credentials")
                    }
                });
            }
     
        }

        return (
          <div className="form-login">
            <div className="title-form">
              <h1>Notes Kita</h1>
            </div>
            <div className="form-area">
              <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <div className="input-email">
                  <input
                    className="form-email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-password">
                  <input
                    className="form-password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button className="submit" type="button" onClick={handleLogin}>
                  Login
                </button>
                <div className="register-form">
                  <p>
                    Don't have an account? <Link to="/register">Register</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        );
};

export default Login;
