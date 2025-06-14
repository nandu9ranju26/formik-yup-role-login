import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
              <h2>Choose a role to login</h2>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
                <Link to="/login/admin">Admin Login</Link>
                <Link to="/login/hr">HR Login</Link>
                <Link to="/login/employee">Employee Login</Link>
              </div>
            </div>
          }
        />
        <Route path="/login/:role" element={<LoginForm />} />
        <Route path="/dashboard/:role" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
