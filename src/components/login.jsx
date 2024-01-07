/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        // Lakukan logika login di sini
        // Misalnya, cek apakah email dan password sesuai dengan data yang valid
        if (email === "user@example.com" && password === "password") {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    };

    return (
        <div className="form-login">
            <div className="title-form">
                <h1>
                    Notes Kita
                </h1>
            </div>
            <div className="form-area">
                <form>
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
            
                    <button className="submit" type="button" onClick={handleLogin}>Login</button>
                    <div className="register-form">
                        <p>Don't have an account? <a href="/register">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
