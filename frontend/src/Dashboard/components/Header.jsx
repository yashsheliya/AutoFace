// src/Dashboard/components/Header.jsx
import React from 'react';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';
import NewProfileModal from '../NewProfileModal'; // Import the NewProfileModal component

const Header = ({ onScriptManagerClick }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  const handleUpgrade = () => {
    alert('Upgrade feature is not yet implemented.');
  };

  const handleAddAccountClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleRunClick = () => {
    alert('Run functionality not yet implemented.');
  };

  return (
    <div className='relative z-10 bg-white'>
      <HeaderTop
        handleMenuOpen={handleMenuOpen}
        handleMenuClose={handleMenuClose}
        handleLogout={handleLogout}
        handleUpgrade={handleUpgrade}
        anchorEl={anchorEl}
      />

      <HeaderBottom
        handleAddAccountClick={handleAddAccountClick}
        handleRunClick={handleRunClick}
        onScriptManagerClick={onScriptManagerClick} // Pass this prop down
      />

      {/* Render the NewProfileModal when isModalOpen is true */}
      {isModalOpen && <NewProfileModal open={isModalOpen} handleClose={handleModalClose} />}
    </div>
  );
}

export default Header;
