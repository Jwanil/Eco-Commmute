import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Dashboard from './components/Dashboard.jsx';
import UserManagement from './components/UserManagement.jsx';
import RewardsManagement from './components/RewardsManagement.jsx';
import PollutionTrends from './components/PollutionTrends.jsx';
import AppAnalytics from './components/AppAnalytics.jsx';
import Logout from './components/Logout.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/rewards-management" element={<RewardsManagement />} />
        <Route path="/pollution-trends" element={<PollutionTrends />} />
        <Route path="/app-analytics" element={<AppAnalytics />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;