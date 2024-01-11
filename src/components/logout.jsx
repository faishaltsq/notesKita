/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BtnLogout = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogout = async () => {
    setIsLoading(true);
    setError(null);
        // Hapus token dan data user dari local storage
    // localStorage.removeItem("username");
    // localStorage.removeItem("email");
    // localStorage.removeItem("user_id");
    localStorage.clear();
    navigate("/")
    window.location.reload();
  };
        // Redirect ke halaman home

  return (
    <div>
      <button className="button-logout" type="button" onClick={handleLogout} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Logout'}
      </button>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default BtnLogout;
