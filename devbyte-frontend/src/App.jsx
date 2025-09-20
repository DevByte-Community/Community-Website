import React from "react";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

export default function App() {
  return (
    <div>
      <h1>Welcome to DevByte Community</h1>
      <p>Select a page to continue.</p>
      <AppRoutes />
    </div>
  );
}
