// src/Dashboard/Settings/Settings.jsx
import React from 'react';
import HeaderBreadcrumbPages from '../components/HeaderBreadcrumbPages';
import SettingsBody from './SettingsBody';

const Settings = () => {
  return (
    <div className="h-screen p-4 font-inter">
      <HeaderBreadcrumbPages
        breadcrumbTitle="Automation settings"
        backPath="/dashboard" />
      <SettingsBody />
    </div>
  );
};

export default Settings;