/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();

        // Perform registration logic here
        // For example, you can send a request to an API endpoint to register the user

        // Assuming the registration is successful, update the state
        setIsRegistered(true);
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
                            value={name}
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
                            Already have an account? <a href="/login">Login</a>
                        </p>
                    </div>
                </form>
                {isRegistered && <p>Registration successful!</p>}
            </div>
        </div>
    );
};

export default Register;