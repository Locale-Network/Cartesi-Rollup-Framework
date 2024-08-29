import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Earn from "./pages/Earn";
import Dashboard from "./pages/Dashboard";
import Membership from "./pages/Membership";
import LLP from "./pages/LLP";
import Stake from "./pages/Stake";
import Borrow from "./pages/Borrow";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import Account from "./pages/Account";
import { AuthProvider } from "./providers/authProvider";
import Header from "./components/Header";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          <Header />

          <div className="body">
            <Routes>
              <Route path="/" element={<Navigate to="/earn" replace />} />
              <Route path="/earn" element={<Earn />} />
              <Route path="/account" element={<Account />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/llp" element={<LLP />} />
              <Route path="/stake" element={<Stake />} />
              <Route path="/borrow" element={<Borrow />} />
            </Routes>
          </div>

          <div className="footer">
            <div className="page-link-container">
              <a href="https://localelending.finance" target="_blank" rel="noreferrer">About</a>
              <a href="https://localelending.substack.com/" target="_blank" rel="noreferrer">Newsletter</a>
              <a href="/terms">Terms</a>
              <a href="/privacy">Privacy</a>
            </div>
            <div className="social-icon-container">
              <FaDiscord size={30} />
              <FaTwitter size={30} />
            </div>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;