import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login.jsx";
import Signup from "@/pages/auth/Signup.jsx";
import App from "@/App.jsx";
import Home from "@/pages/Home.jsx";
import Navbar from "@/components/Navbar.jsx";

export default function AppRoutes() {
  return (
    <div className="">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

// This is an optional place holder script
