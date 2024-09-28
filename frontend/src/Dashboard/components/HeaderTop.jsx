// src/Dashboard/components/HeaderTop.js
import React, { useEffect, useState } from 'react';
import Menu from '@mui/material/Menu';
import { MdLogout } from "react-icons/md";
import User from '../../assets/Images/Dashboard/Users/Ava.svg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // Import your AuthContext for user data
import axios from 'axios';

const HeaderTop = ({ hideExtras, handleMenuOpen, handleMenuClose, handleLogout, handleUpgrade, anchorEl }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth(); // Retrieve authentication state
  const [userEmail, setUserEmail] = useState(''); // State to store user email

  // Fetch user profile data to get the email
  useEffect(() => {
    if (isAuthenticated) {
      axios
        .get('http://localhost:5000/api/auth/profile', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        })
        .then((response) => {
          setUserEmail(response.data.email);
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
    }
  }, [isAuthenticated]);

  // Function to handle navigation to the User Profile page
  const handleGoToUserProfile = () => {
    handleMenuClose();
    navigate('/dashboard/profile');
  };

  return (
    <div className="flex items-center justify-between">
      <div className="title">
        <h6 className="text-2xl font-bold">FACEBOOK AUTOMATION</h6>
      </div>
      {!hideExtras && (
        <div className="flex items-center gap-4 select-none">
          <p className="text-gray-600">
            Your subscription will expire in 3 days.{" "}
            <a href="/pay-now" className='text-blue-500 hover:underline'>Pay Now</a> to continue using AutoFace.
          </p>
          <div className="cursor-pointer" onClick={handleMenuOpen}>
            <img src={User} alt="Profile" className="rounded-full h-14 w-14" />
          </div>

          {/* Profile Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            PaperProps={{
              className: 'menu-drop-dropdown border border-grey-border p-4 rounded-xl',
            }}
          >
            {/* Display the dynamic email */}
            <div className="font-semibold text-center text-gray-800">
              {userEmail || 'Loading...'} {/* Display email or loading text */}
            </div>

            {/* Profile Usage Section with centered text */}
            <div className="flex items-center justify-center mt-1">
              <div className="w-2 h-2 mr-1 bg-green-500 rounded-full"></div>
              <p className="text-xs text-gray-500">0/30 profiles</p>
            </div>
            
            {/* Go To User Profiles */}
            <div className="p-3 mt-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200" onClick={handleGoToUserProfile}>
              <p className="text-sm font-semibold text-center text-gray-800">My Profiles</p>
            </div>

            {/* Subscription Details */}
            <div className="flex items-center justify-between gap-3 p-3 mt-3 bg-gray-100 rounded-lg">
              <div>
                <p className="text-sm font-bold">Team</p>
                <p className="text-xs text-gray-500">Exp: 26/09/2024</p>
              </div>
              <button
                onClick={handleUpgrade}
                className="px-3 py-1 text-xs font-medium text-white transition bg-blue-500 rounded-md hover:bg-blue-600"
              >
                Upgrade
              </button>
            </div>

            {/* Divider */}
            <hr className="my-3 border-t border-gray-200" />

            {/* Logout Section */}
            <div onClick={handleLogout} className="flex items-center px-3 py-2 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-100">
              <MdLogout className="mr-2 text-2xl text-gray-700" />
              <span className="text-sm font-semibold">Log out</span>
            </div>
          </Menu>
        </div>
      )}
    </div>
  );
};

export default HeaderTop;
