/* eslint-disable no-unused-vars */
import React from "react";
import NotesApp from "./NotesApp";
import Login from "./login";
import Register from "./register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Router basename="/notes-app-react/">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/homepage" element={<NotesApp />} />
            </Routes>
        </Router>
    );
    };

export default App;
