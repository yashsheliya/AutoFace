// src/components/ProfileInformation.js
import React from 'react';

const ProfileInformation = ({ formData, handleChange, handleSaveProfile, loading }) => {
  return (
    <div className="max-w-xl p-6 mx-auto bg-white border border-gray-300 rounded-lg shadow-md tab-content">
      <h2 className="mb-4 text-xl font-bold text-center">Profile Information</h2>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Name:</label>
        <input
          className="w-full p-2 border rounded outline-none"
          name="name"
          value={formData.name || ''}
          onChange={handleChange}
          placeholder="Enter your name"
          disabled={loading}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Email:</label>
        <input
          className="w-full p-2 bg-gray-100 border rounded outline-none cursor-not-allowed"
          name="email"
          value={formData.email || ''}
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Facebook:</label>
        <input
          className="w-full p-2 border rounded outline-none"
          name="facebook"
          value={formData.facebook || ''}
          onChange={handleChange}
          placeholder="https://www.facebook.com/yourprofile"
          disabled={loading}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Instagram:</label>
        <input
          className="w-full p-2 border rounded outline-none"
          name="instagram"
          value={formData.instagram || ''}
          onChange={handleChange}
          placeholder="https://www.instagram.com/yourprofile"
          disabled={loading}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Twitter:</label>
        <input
          className="w-full p-2 border rounded outline-none"
          name="twitter"
          value={formData.twitter || ''}
          onChange={handleChange}
          placeholder="https://twitter.com/yourprofile"
          disabled={loading}
        />
      </div>
      <button
        className={`w-full px-4 py-2 font-semibold text-white rounded ${loading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'}`}
        onClick={handleSaveProfile}
        disabled={loading}
      >
        {loading ? 'Saving...' : 'Save Profile'}
      </button>
    </div>
  );
};

export default ProfileInformation;
