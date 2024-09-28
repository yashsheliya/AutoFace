  // src/Dashboard/Script_Manager/NewScript/NewScriptHeader.jsx
  import React, { useState } from 'react';
  import { AiOutlineBug, AiOutlinePlayCircle } from 'react-icons/ai';
  import { MdSave } from 'react-icons/md';
  import axios from 'axios';
  import { toast, ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  const NewScriptHeader = ({ nodes, edges }) => {
    const [scriptName, setScriptName] = useState('');
    const [note, setNote] = useState('');

    const handleSave = async () => {
      if (!scriptName.trim()) {
          toast.error('Enter name script is required!', {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
          });
          return;
      }
  
      try {
          const scriptData = {
              name: scriptName,
              note,
              nodes,
              edges,
          };
  
          console.log('Script Data being sent:', scriptData); // Debug line
  
          const response = await axios.post('http://localhost:5000/api/scripts', scriptData); // Ensure this URL is correct
          console.log('Script saved:', response.data);
  
          toast.success('Script saved successfully!', {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
          });
  
          // Reset the form after a successful save
          setScriptName('');
          setNote('');
      } catch (error) {
          console.error('Error saving script:', error);
  
          const errorMessage = error.response?.data?.message || 'Error saving script. Please try again.';
          toast.error(errorMessage, {
              position: 'top-right',
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
          });
      }
  };

    return (
      <div className="relative flex items-center justify-between p-4 bg-white border rounded-xl">
        {/* Input fields section */}
        <div className="flex items-center justify-around flex-grow gap-4">
          {/* Enter name input */}
          <div className="flex items-center flex-grow px-4 py-2 bg-gray-100 border border-gray-300 border-dashed rounded-lg max-w-96">
            <input
              type="text"
              placeholder="Enter name"
              value={scriptName}
              onChange={(e) => setScriptName(e.target.value)}
              className="w-full text-gray-700 bg-transparent outline-none"
            />
          </div>

          {/* New note input with icon */}
          <div className="flex items-center flex-grow px-4 py-2 bg-gray-100 border border-gray-300 border-dashed rounded-lg max-w-96">
            <span className="mr-2 text-gray-500">
              <MdSave className="text-lg" />
            </span>
            <input
              type="text"
              placeholder="New note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full text-gray-700 bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Icon buttons section */}
        <div className="flex items-center gap-4 ml-4">
          {/* Bug icon */}
          <button className="p-2 text-gray-600 transition bg-gray-100 rounded-full hover:bg-gray-200">
            <AiOutlineBug className="text-xl" />
          </button>

          {/* Play icon */}
          <button className="p-2 text-gray-600 transition bg-gray-100 rounded-full hover:bg-gray-200">
            <AiOutlinePlayCircle className="text-xl" />
          </button>

          {/* Save button */}
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-4 py-2 text-white transition bg-blue-500 rounded-lg shadow-md hover:bg-blue-600"
          >
            <MdSave className="text-xl" />
            <span>SAVE</span>
          </button>
        </div>

        {/* ToastContainer for notifications */}
        <ToastContainer />
      </div>
    );
  };

  export default NewScriptHeader;
