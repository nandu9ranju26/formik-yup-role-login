import React from 'react';
import { useParams } from 'react-router-dom';

const Dashboard = () => {
  const { role } = useParams();

  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h1>Welcome {role.charAt(0).toUpperCase() + role.slice(1)}</h1>
      <p>This is the {role} dashboard.</p>
    </div>
  );
};

export default Dashboard;
