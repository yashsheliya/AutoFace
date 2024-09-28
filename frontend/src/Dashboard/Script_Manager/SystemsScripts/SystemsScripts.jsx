// src/Dashboard/Script_Manager/SystemsScripts.jsx
import React from 'react';
import Table from '../../components/Table/Table';

const SystemsScripts = () => {
  // Define columns for "System's Scripts"
  const columns = [
    { headerName: '#', field: 'index' },
    { headerName: 'Script ID', field: 'id' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Category', field: 'category' },
    { headerName: 'Created By', field: 'createdBy' },
  ];

  // Example data; replace with your actual data source
  const data = [
    { index: 1, id: 'SYS001', name: 'System Script 1', category: 'Utility', createdBy: 'Yash Sheliya' },
    { index: 2, id: 'SYS002', name: 'System Script 2', category: 'Management', createdBy: 'Darshan Aslaliya' },
  ];

  return (
    <>
      <Table columns={columns} data={data} />
    </>
  );
};

export default SystemsScripts;
