// src/components/NoDataPlaceholder.jsx
import React from 'react';
import { AiOutlineInbox } from 'react-icons/ai'; // An example icon, you can choose any other icon

const NoDataPlaceholder = ({ message = "No data available" }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-gray-400">
      <AiOutlineInbox className="mb-4 text-5xl" /> {/* Replace this with your preferred icon */}
      <p className='capitalize'>{message}</p>
    </div>
  );
};

export default NoDataPlaceholder;
