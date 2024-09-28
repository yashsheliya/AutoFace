// src/components/SearchInput.jsx
import React from 'react';
import { MdSearch } from 'react-icons/md';

const SearchInput = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex items-center p-2 mb-4 bg-gray-100 rounded-lg">
      <MdSearch className="text-xl text-gray-500" />
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-1 ml-2 text-sm bg-transparent outline-none"
      />
    </div>
  );
};

export default SearchInput;
