// src/Dashboard/Script_Manager/ScriptManager.jsx
import React from 'react';
import ScriptManagerBody from './ScriptManagerBody';
import HeaderBreadcrumbPages from '../components/HeaderBreadcrumbPages';

const ScriptManager = () => {
  return (
    <div className="h-screen p-4 font-inter">
      <HeaderBreadcrumbPages
        breadcrumbTitle="Script Manager"
        backPath="/dashboard" />
      <ScriptManagerBody />
    </div>
  );
};

export default ScriptManager;
