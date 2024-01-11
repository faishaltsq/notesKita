/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();



  const handleLogin = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);

    try {
      // Perform input validation
      if (!email.trim()) {
        alert("Email tidak boleh kosong");
      }
      if (!password.trim()) {
        alert("Password tidak boleh kosong");
      }

      // Send login request to Flask API
      const response = await axios.post("http://127.0.0.1:5000/api/v1/users/login", {
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      // Successful login
      

      if (response.status == 200) {
        localStorage.setItem("email", response.data.values.email);
        localStorage.setItem("user_id", response.data.values.id);
        navigate("/homepage");
        toast.success('Login Success!');
        window.location.reload();
      } else {
        console.log("Login failed: " + response.data.error)
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred while logging in");
    } finally {
      setIsLoading(false);
    }
  };

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

                <button className="submit" type="submit" onClick={handleLogin}>
                  Login
                </button>
                <div className="register-form">
                  <p>
                    Don't have an account? <Link to="/register" >Register</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        );
};

export default Login;
