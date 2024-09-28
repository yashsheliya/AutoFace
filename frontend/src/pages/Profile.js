// src/pages/Profile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import HeaderBreadcrumbPages from '../Dashboard/components/HeaderBreadcrumbPages';
import ProfileInformation from '../components/ProfileInformation';
import ChangePassword from '../components/ChangePassword';
import { toast } from 'react-toastify';

const Profile = () => {
  const { isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    facebook: '',
    instagram: '',
    twitter: '',
    currentPassword: '',
    newPassword: ''
  });
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    if (isAuthenticated) {
      axios
        .get('http://localhost:5000/api/auth/profile', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        })
        .then((response) => {
          setFormData({
            name: response.data.name || '',
            email: response.data.email || '',
            facebook: response.data.socialLinks?.facebook || '',
            instagram: response.data.socialLinks?.instagram || '',
            twitter: response.data.socialLinks?.twitter || '',
          });
        })
        .catch((error) => {
          toast.error('Failed to load profile data'); // Handle error
        });
    }
  }, [isAuthenticated]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Profile validation
  const validateProfile = () => {
    if (!formData.name.trim()) {
      toast.error('Name is required');
      return false;
    }
    if (formData.facebook && !/^https?:\/\/(www\.)?facebook\.com\/.+$/.test(formData.facebook)) {
      toast.error('Invalid Facebook URL');
      return false;
    }
    if (formData.instagram && !/^https?:\/\/(www\.)?instagram\.com\/.+$/.test(formData.instagram)) {
      toast.error('Invalid Instagram URL');
      return false;
    }
    if (formData.twitter && !/^https?:\/\/(www\.)?twitter\.com\/.+$/.test(formData.twitter)) {
      toast.error('Invalid Twitter URL');
      return false;
    }
    return true;
  };

  const handleSaveProfile = async () => {
    if (!validateProfile()) return;

    try {
      setLoading(true); // Set loading to true
      await axios.put('http://localhost:5000/api/auth/profile', formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      toast.success('Profile updated successfully');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error updating profile');
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  // Password validation
  const validatePassword = () => {
    if (!formData.currentPassword.trim()) {
      toast.error('Current password is required');
      return false;
    }
    if (formData.newPassword.length < 6) {
      toast.error('New password must be at least 6 characters long');
      return false;
    }
    return true;
  };

  const handleChangePassword = async () => {
    if (!validatePassword()) return;

    try {
      setLoading(true);
      const response = await axios.put(
        'http://localhost:5000/api/auth/change-password',
        {
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      );
      toast.success(response.data.message);
      // Clear the password fields
      setFormData({
        ...formData,
        currentPassword: '',
        newPassword: '',
      });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error changing password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-screen p-4 font-inter">
        <HeaderBreadcrumbPages breadcrumbTitle="My Profile" backPath="/dashboard" />

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-6 space-x-4 tabs">
          <button
            className={`px-4 py-2 rounded ${activeTab === 'profile' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
            onClick={() => setActiveTab('profile')}
          >
            Profile Information
          </button>
          <button
            className={`px-4 py-2 rounded ${activeTab === 'password' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
            onClick={() => setActiveTab('password')}
          >
            Change Password
          </button>
        </div>

        {/* Display the content based on the active tab */}
        {activeTab === 'profile' && (
          <ProfileInformation
            formData={formData}
            handleChange={handleChange}
            handleSaveProfile={handleSaveProfile}
            loading={loading}
          />
        )}
        {activeTab === 'password' && (
          <ChangePassword
            formData={formData}
            handleChange={handleChange}
            handleChangePassword={handleChangePassword}
            loading={loading}
          />
        )}
      </div>
    </>
  );
};

export default Profile;
