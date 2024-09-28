// src/Dashboard/Script_Manager/YourScripts.jsx
import React from 'react';
import Table from '../../components/Table/Table';

const YourScripts = () => {
  // Define columns for "Your Scripts"
  const columns = [
    { headerName: '#', field: 'index' },
    { headerName: 'Name', field: 'name' , sortable: true},
    { headerName: 'Status', field: 'status', sortable: true },
    { headerName: 'Tag', field: 'tag' },
    { headerName: 'Note', field: 'note' },
    { headerName: 'Created', field: 'Created' },

  ];

  // Example data; replace with your actual data source
  const data = [
    { index: 1, name: 'Script 1', status: 'Active', tag: 'Tag1', note: 'Sample Note', Created:'Yash Sheliya' },
    { index: 2, name: 'Script 2', status: 'Inactive', tag: 'Tag2', note: 'Another Note', Created:'Darshan Aslaliya' },
  ];

  return (
    <>
      <Table columns={columns} data={data} />
    </>
  );
};

export default YourScripts;
