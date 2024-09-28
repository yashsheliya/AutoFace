// src/Dashboard/Script_Manager/ScriptManagerBody.jsx
import React, { useState } from 'react';
import { TbCodeCircle2 } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai"; // Icon for Create a new script
import { BiSolidCheckCircle } from "react-icons/bi"; // Icon for Active check mark
import { RiFileCodeLine } from "react-icons/ri"; // Icon for System's Scripts
import YourScripts from './YourScripts/YourScripts';
import SystemsScripts from './SystemsScripts/SystemsScripts';
import { useNavigate } from 'react-router-dom';

const ScriptManagerBody = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('yourScripts'); // Default tab is 'yourScripts'

  // Function to render content based on the active tab
  const renderContent = () => {
    if (activeTab === 'yourScripts') {
      return <YourScripts />;
    } else {
      return <SystemsScripts />;
    }
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-between mb-8 bg-white">
        {/* Header Title with Icon */}
        <div className='flex items-center gap-2'>
          <TbCodeCircle2 className="text-2xl" />
          <h3 className="font-medium">SCRIPT MANAGER</h3>
        </div>

        {/* Action Buttons Styled as Divs */}
        <div className="flex gap-4">
          {/* Create a new script */}
          <div 
          className="flex items-center gap-4 px-10 py-4 font-semibold text-black border border-black border-dashed cursor-pointer rounded-2xl min-w-80"
          onClick={() => navigate('/dashboard/new-script')} >
            <div className='p-2 bg-gray-200 rounded-full'>
              <AiOutlinePlus className="text-2xl text-gray-800" />
            </div>
            <span>Create a new script</span>
          </div>

          {/* Your Scripts */}
          <div
            className={`flex justify-between items-center gap-2 px-10 py-4 text-black bg-white border cursor-pointer rounded-2xl min-w-80 ${activeTab === 'yourScripts' ? 'border-blue-500' : 'border-transparent'} shadow-3xl`}
            onClick={() => setActiveTab('yourScripts')}
          >
            <div className='flex items-center gap-4'>
              <div className='p-2 bg-blue-100 rounded-full'>
                <TbCodeCircle2 className="text-2xl text-blue-500" />
              </div>
              <span className='font-medium'>Your Scripts</span>
            </div>
            {activeTab === 'yourScripts' && <BiSolidCheckCircle className="text-xl text-blue-500" />} {/* Show check icon if active */}
          </div>

          {/* System's Scripts */}
          <div
            className={`flex justify-between items-center gap-2 px-10 py-4 text-black bg-white border cursor-pointer rounded-2xl min-w-80 ${activeTab === 'systemScripts' ? 'border-blue-500' : 'border-transparent'} shadow-3xl`}
            onClick={() => setActiveTab('systemScripts')}
          >
            <div className='flex items-center gap-4'>
              <div className='p-2 bg-yellow-100 rounded-full'>
                <RiFileCodeLine className="text-2xl text-yellow-500" />
              </div>
              <span className='font-medium'>System’s Scripts</span>
            </div>
            {activeTab === 'systemScripts' && <BiSolidCheckCircle className="text-xl text-blue-500" />} {/* Show check icon if active */}
          </div>
        </div>
      </div>


      {/* Display content based on the active tab */}
        {renderContent()}

    </>
  );
};

export default ScriptManagerBody;
