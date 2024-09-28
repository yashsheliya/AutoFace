// src/Dashboard/Table/Table.jsx
import React, { useState, useEffect } from 'react';
import NoDataPlaceholder from './NoDataPlaceholder'; // Adjust the path if necessary
import { RiArrowUpFill ,RiArrowDownFill  } from "react-icons/ri";// Import sorting arrow icons


const Table = ({ columns, data }) => {
  // State to manage sorting
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
  const [sortedData, setSortedData] = useState(data);

  useEffect(() => {
    setSortedData(data);
  }, [data]);

  // Function to handle sorting
  const handleSort = (field) => {
    const column = columns.find(col => col.field === field);
    if (!column || !column.sortable) return; // Exit if column is not sortable

    // Toggle sort direction
    const direction = sortConfig.key === field && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key: field, direction });

    // Sorting data based on the column and direction
    const sortedData = [...data].sort((a, b) => {
      if (a[field] < b[field]) return direction === 'asc' ? -1 : 1;
      if (a[field] > b[field]) return direction === 'asc' ? 1 : -1;
      return 0;
    });
    
    setSortedData(sortedData);
  };

  return (
    <div className="overflow-x-auto bg-white rounded-lg">
      <table className="w-full text-left table-auto">
        <thead className="bg-blue-50">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className={`px-4 py-4 font-semibold text-gray-700 border-b ${column.sortable ? 'cursor-pointer' : ''} select-none`}
                onClick={() => column.sortable && handleSort(column.field)} // Handle click on the whole header cell
              >
                <div className="flex items-center justify-between">
                  <span>{column.headerName}</span>
                  {/* Conditionally render sorting icons for sortable columns */}
                  {column.sortable && (
                    <div className="flex flex-col items-center ml-1">
                      {/* Arrow Up */}
                      <RiArrowUpFill
                        className={`text-xs ${sortConfig.key === column.field && sortConfig.direction === 'asc' ? 'text-gray-700' : 'text-gray-400'}`}
                      />
                      {/* Arrow Down */}
                      <RiArrowDownFill
                        className={`text-xs ${sortConfig.key === column.field && sortConfig.direction === 'desc' ? 'text-gray-700' : 'text-gray-400'}`}
                      />
                    </div>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.length > 0 ? (
            sortedData.map((item, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-100">
                {columns.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className={`px-4 py-4 border 
                      ${rowIndex === sortedData.length - 1 && colIndex === 0 ? 'rounded-bl-md' : ''} 
                      ${rowIndex === sortedData.length - 1 && colIndex === columns.length - 1 ? 'rounded-br-md' : ''}`}
                  >
                    {item[column.field]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="p-8 text-center">
                <NoDataPlaceholder message="No data" />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
