// src/Dashboard/Script_Manager/HeaderBreadcrumbPages.jsx
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { useNavigate } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

const HeaderBreadcrumbPages = ({ title = "FACEBOOK AUTOMATION", breadcrumbTitle, backPath }) => {
  const navigate = useNavigate();

  return (
    <div className="header-breadcrumb">
      {/* Main Title Section */}
      <div className='py-3 title'>
        <h6 className="text-2xl font-bold">{title}</h6>
      </div>

      {/* Breadcrumb Section */}
      <div className="flex items-center mb-3">
        {/* Back Button */}
        <button
          onClick={() => navigate(backPath)}
          className="p-2 mr-2 text-xl text-gray-600 transition bg-gray-100 rounded-full hover:bg-gray-200"
        >
          <MdArrowBack />
        </button>
        
        {/* Breadcrumb Title */}
        <h2 className="text-xl font-bold">{breadcrumbTitle}</h2>
      </div>
    </div>
  );
};

// Define PropTypes to enforce required props and defaults
HeaderBreadcrumbPages.propTypes = {
  title: PropTypes.string, // title is optional with a default value
  breadcrumbTitle: PropTypes.string.isRequired, // breadcrumbTitle is required
  backPath: PropTypes.string.isRequired, // Ensure backPath is provided
};

export default HeaderBreadcrumbPages;
