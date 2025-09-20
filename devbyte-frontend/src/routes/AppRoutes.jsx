import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login.jsx";
import Signup from "@/pages/auth/Signup.jsx";
import Home from "@/pages/Home.jsx";
import CommunityGuidelines from "../pages/CommunityGuidelines.jsx";
import Learning from "@/pages/Learning.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="communityGuidelines" element={<CommunityGuidelines />} />
      <Route path="learning" element={<Learning />} />
    </Routes>
  );
}
