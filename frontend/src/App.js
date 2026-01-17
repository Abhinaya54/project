import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";

// Import components
import ProtectedRoute from './components/ProtecteRoute';

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Portfolio from "./pages/Portfolio";
import Goals from "./pages/Goals";

function App() {
  return (
    <>
      {/* Navigation Links */}
      <nav style={{ display: "flex", gap: "1rem", margin: "1rem" }}>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/goals">Goals</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/portfolio" element={<Portfolio />} />
      <Route element={<ProtectedRoute />}>
  <Route path="/goals" element={<Goals />} />
</Route>
      </Routes>
    </>
  );
}

export default App;
