// src/Dashboard/components/HeaderBottom.jsx
import React from 'react';
import { MdSearch, MdOutlineRefresh, MdOutlineDisplaySettings, MdOutlineSettings, MdAdd } from "react-icons/md";
import { TbCodeCircle2 } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import TooltipMaterialUI from '../../components/Ui/Tooltip';

const HeaderBottom = ({ handleAddAccountClick, handleRunClick }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between w-full p-3 mx-auto mt-4 bg-white rounded-full shadow-lg">
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className='flex items-center px-3 py-2 bg-gray-100 rounded-full'>
          <MdSearch className="text-2xl text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full ml-2 text-gray-700 bg-transparent outline-none"
          />
        </div>

        {/* Icon Actions with Custom Tooltips */}
        <div className="flex items-center gap-4">
          <TooltipMaterialUI title="Refresh" placement="top" className="font-inter">
            <button className="p-2 transition bg-gray-100 rounded-full hover:bg-gray-200">
              <MdOutlineRefresh className="text-2xl text-gray-600" />
            </button>
          </TooltipMaterialUI>

          <TooltipMaterialUI title="Display settings" placement="top" className="font-inter">
            <button className="p-2 transition bg-gray-100 rounded-full hover:bg-gray-200">
              <MdOutlineDisplaySettings className="text-2xl text-gray-600" />
            </button>
          </TooltipMaterialUI>

          <TooltipMaterialUI title="Settings" placement="top" className="font-inter">
            <button onClick={() => navigate('/dashboard/settings')} className="p-2 transition bg-gray-100 rounded-full hover:bg-gray-200">
              <MdOutlineSettings className="text-2xl text-gray-600" />
            </button>
          </TooltipMaterialUI>

          <TooltipMaterialUI title="Script Manager" placement="top" className="font-inter">
            <button onClick={() => navigate('/dashboard/script-manager')} className="p-2 transition bg-gray-100 rounded-full hover:bg-gray-200">
              <TbCodeCircle2 className="text-2xl text-gray-600" />
            </button>
          </TooltipMaterialUI>

          <TooltipMaterialUI title="Add account" placement="top" className="font-inter">
            <button onClick={handleAddAccountClick} className="p-2 transition bg-gray-100 rounded-full hover:bg-gray-200">
              <MdAdd className="text-2xl text-gray-600" />
            </button>
          </TooltipMaterialUI>
        </div>
      </div>

      {/* Run Button */}
      <button onClick={handleRunClick} className="px-8 py-2 font-semibold text-white transition bg-blue-500 rounded-full shadow-md hover:bg-blue-600">
        Run
      </button>
    </div>
  );
};

export default HeaderBottom;
