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


    try {
      // Buat permintaan API logout ke server backend
      const response = await fetch('/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Masukkan token di sini
        },
      });

      if (response.ok) {
        // Hapus token dan data user dari local storage
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        localStorage.removeItem("id");
        window.location.reload();
        navigate("/")

        // Redirect ke halaman home
        navigate("/");
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Logout gagal!');
      }
    } catch (error) {
      alert( 'Logout gagal!')
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

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
