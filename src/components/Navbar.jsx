import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">App Logo</div>
      <div className="links">
        <Link to="/">Dashboard</Link>
        <Link to="/user-management">User Management</Link>
        <Link to="/rewards-management">Rewards Management</Link>
        <Link to="/pollution-trends">Pollution Trends</Link>
        <Link to="/app-analytics">App Analytics</Link>
        <Link to="/logout">Logout</Link>
      </div>
    </nav>
  );
}

export default Navbar;