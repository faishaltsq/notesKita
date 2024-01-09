/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";






const Register = () => {

    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    
    const handleRegister = () =>{
        axios.post("http://localhost:3000/",{
            username: username,
            email: email,
            password: password
        })
        .then(function (response){
            console.log(response);
            navigate("/login")
        })
        .catch(function (error){
            console.log(error);
            if(error.response.status === 401){
                alert("invalid credentials")
            }
        }
        );
    }


  



    return (
        <div className="form-register">
            <div className="title-form">
                <h1>Notes Kita</h1>
            </div>
            <div className="form-area">
                <form onSubmit={handleRegister}>
                    <h1>Register</h1>
                    <div className="input-name">
                        <input
                            className="form-name"
                            type="name"
                            placeholder="Name"
                            value={username}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
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
                    <div className="register-form">
                        <button className="submit" type="button">Register</button>
                        <p>
                            Already have an account? <a href="./login.jsx">Login</a>
                        </p>
                    </div>
                </form>
                {isRegistered && <p>Registration successful!</p>}
            </div>
        </div>
    );
};

export default Register;