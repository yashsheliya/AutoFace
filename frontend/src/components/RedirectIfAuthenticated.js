// src/components/RedirectIfAuthenticated.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const RedirectIfAuthenticated = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  // Show a loading indicator while the auth check is in progress
  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or skeleton screen
  }

  // If the user is authenticated, redirect to dashboard
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace={true} />;
  }

  return children;
};

export default RedirectIfAuthenticated;
