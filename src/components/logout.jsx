/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

const BtnLogout = () => {

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        localStorage.removeItem("id");
        window.location.reload();

        

    }




    return (
        <div>
            <button className="button-logout" type="button" onClick={handleLogout}>
                Logout
            </button>
        </div>
    )

}

export default BtnLogout;