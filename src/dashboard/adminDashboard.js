import React, { useState, useEffect } from "react";
import API from "../utils/api";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await API.get("/users");
        setUsers(response.data);
      } catch (err) {
        console.error("Error fetching users", err);
      }
    };
    fetchUsers();
  }, []);

  const handleDeleteUser = async (username) => {
    try {
      await API.delete(`/users/${username}`);
      alert("User deleted successfully!");
      setUsers(users.filter((user) => user.username !== username));
    } catch (err) {
      console.error("Error deleting user", err);
    }
  };

  const handleResetPassword = async (username) => {
    try {
      await API.post(`/users/${username}/reset-password`);
      alert("Password reset successfully!");
    } catch (err) {
      console.error("Error resetting password", err);
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button onClick={logout}>Logout</button>
      <ul>
        {users.map((user) => (
          <li key={user.username}>
            {user.username}
            <button onClick={() => handleDeleteUser(user.username)}>Erase</button>
            <button onClick={() => handleResetPassword(user.username)}>Reset Password</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
