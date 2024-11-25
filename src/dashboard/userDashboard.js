import React, { useState, useEffect } from "react";
import API from "../utils/api";

const UserDashboard = () => {
  const [lastLogin, setLastLogin] = useState("");

  useEffect(() => {
    const fetchLastLogin = async () => {
      try {
        const response = await API.get("/me/last-login");
        setLastLogin(response.data.lastLogin.last_login);
      } catch (err) {
        console.error("Error fetching last login", err);
      }
    };
    fetchLastLogin();
  }, []);

  const handleChangePassword = async () => {
    const newPassword = prompt("Enter your new password:");
    try {
      await API.put("/me/change-password", { newPassword });
      alert("Password changed successfully!");
    } catch (err) {
      console.error("Error changing password", err);
      alert("Failed to change password.", err);
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      <button onClick={logout}>Logout</button>
      <p>Last Login: {lastLogin}</p>
      <button onClick={handleChangePassword}>Change Password</button>
    </div>
  );
};

export default UserDashboard;
