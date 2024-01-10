/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";

const Register = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

 

  const handleRegister = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    try {
      // Perform input validation (add your rules here)
      if (!username.trim()) {
        alert("Username tidak boleh kosong");
      }else if(!email.trim()){
        alert("Email tidak boleh kosong");
      } else if (!password.trim()) {
        alert("Password tidak boleh kosong");
      }
      
      
      // ... other validation rules

      // Send registration request to Flask API
      const response = await axios.post("http://127.0.0.1:5000/api/v1/users", {
        username,
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Handle successful registration
      if (response.data.success) {
        alert("Registration successful!");
        navigate("/login");
      } else {
        setError("Registration failed: " + response.data.error);
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred during registration");
    } finally {
      setIsLoading(false);
    }
  };
  



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
                        <button className="submit" type="submit">Register</button>
                        <p>
                            Already have an account? <Link to="/">Login</Link> 
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;