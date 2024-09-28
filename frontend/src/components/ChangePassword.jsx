// src/components/ChangePassword.js
import React from 'react';

const ChangePassword = ({ formData, handleChange, handleChangePassword, loading }) => {
  return (
    <div className="max-w-xl p-6 mx-auto bg-white border border-gray-300 rounded-lg shadow-md tab-content">
      <h2 className="mb-4 text-xl font-bold text-center">Change Password</h2>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Current Password:</label>
        <input
          type="password"
          className="w-full p-2 border rounded"
          name="currentPassword"
          value={formData.currentPassword || ''}
          onChange={handleChange}
          disabled={loading}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">New Password:</label>
        <input
          type="password"
          className="w-full p-2 border rounded"
          name="newPassword"
          value={formData.newPassword || ''}
          onChange={handleChange}
          disabled={loading}
        />
      </div>
      <button
        className={`w-full px-4 py-2 font-semibold text-white rounded ${loading ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'}`}
        onClick={handleChangePassword}
        disabled={loading}
      >
        {loading ? 'Changing...' : 'Change Password'}
      </button>
    </div>
  );
};

export default ChangePassword;
