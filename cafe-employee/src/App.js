import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import CafePage from './pages/CafePage';
import EmployeePage from './pages/EmployeePage';
import CafeEmployeePage from './pages/CafeEmployeePage';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1> Cafe Employee Page</h1>
        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/cafes" className="nav-link">
                Cafes
              </Link>
            </li>
            <li>
              <Link to="/employees" className="nav-link">
                Employees
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/cafes" element={<CafePage />} />
          <Route path="/cafes/:cafeId/employees" element={<CafeEmployeePage />} />
          <Route path="/employees" element={<EmployeePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
