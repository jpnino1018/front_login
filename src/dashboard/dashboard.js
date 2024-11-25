import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserDashboard from "./userDashboard";
import AdminDashboard from "./adminDashboard";

const Dashboard = ({ userRole }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  if (userRole === "USER") {
    return <UserDashboard />;
  } else if (userRole === "ADMIN") {
    return <AdminDashboard />;
  } else {
    return <div>Loading...</div>;
  }
};

export default Dashboard;
