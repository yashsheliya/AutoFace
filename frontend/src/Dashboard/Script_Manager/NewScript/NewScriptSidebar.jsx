// src/Dashboard/Script_Manager/NewScript/NewScriptSidebar.jsx
import React, { useState } from 'react';
import SearchInput from './SearchInput';
import IconWrapper from './IconWrapper';
import WatchStoryEditForm from './NewScriptForms/WatchStory/WatchStoryForm';
import tabData from './tabData'; // Import tabData from a configuration file

// Mapping of label to corresponding edit form components
const editFormComponents = {
  'Watch story': WatchStoryEditForm,
  // Add other mappings as needed
};

const NewScriptSidebar = ({ activeEditNode, setActiveEditNode, setNodes }) => {
  const [activeTab, setActiveTab] = useState('General');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = tabData[activeTab].filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onDragStart = (event, item) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify(item));
    event.dataTransfer.effectAllowed = 'move';
  };

  const handleBack = () => {
    setActiveEditNode(null); // Reset the active edit node, effectively closing the form
  };

  const renderEditForm = () => {
    if (!activeEditNode) return null;

    // Retrieve the form component based on the active edit node's label
    const FormComponent = editFormComponents[activeEditNode.data.label];

    const handleSaveFormData = (updatedData) => {
      setActiveEditNode((prevNode) => ({
        ...prevNode,
        data: {
          ...prevNode.data,
          ...updatedData, // Merge the form data with existing node data
        },
      }));

      // Update the node data in the nodes array
      setNodes((prevNodes) =>
        prevNodes.map((node) =>
          node.id === activeEditNode.id ? { ...node, data: { ...node.data, ...updatedData } } : node
        )
      );
      setActiveEditNode(null); // Close the form after saving
    };

    return FormComponent ? (
      <FormComponent
        data={activeEditNode.data} // Pass current data to form
        onSave={handleSaveFormData} // Pass save handler
        onClose={handleBack} // Pass the back handler to the form
        title={activeEditNode.data.label} // Pass the dynamic title
      />
    ) : null;
  };

  return (
    <div className="p-4 bg-white border shadow-md w-Sidebar rounded-xl">
      {activeEditNode ? (
        renderEditForm()
      ) : (
        <>
          <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <div className="flex items-center mb-4 border-b">
            {Object.keys(tabData).map((tab) => (
              <div
                key={tab}
                className={`px-4 py-2 text-sm font-semibold cursor-pointer ${activeTab === tab ? 'border-b-2 border-black text-black' : 'text-gray-600'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-between p-4 bg-white border rounded-lg cursor-pointer hover:bg-gray-50"
                draggable
                onDragStart={(event) => onDragStart(event, item)}
              >
                <div className="flex items-center justify-center flex-grow text-3xl text-gray-700">
                  <IconWrapper iconName={item.icon} />
                </div>
                <span className="mt-2 font-semibold text-center text-gray-700 text-12">{item.name}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default NewScriptSidebar;
