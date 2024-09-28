// src/Dashboard/Dashboard.jsx
import React from 'react';
import EmptyProfile from './EmptyProfile';
import Header from './components/Header';

const Dashboard = () => {
  return (
    <div className="h-screen p-4 font-inter">
      <Header />
      <EmptyProfile />
    </div>
  );
};

export default Dashboard;
