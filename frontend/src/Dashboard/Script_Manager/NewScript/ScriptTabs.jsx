// src/Dashboard/NewScript/ScriptTabs.jsx
import React from 'react';

const ScriptTabs = () => {
    const toolboxItems = [
        { name: 'Watch story', color: '#FACC15' },
        { name: 'Create post', color: '#EF4444' },
        { name: 'Watch video', color: '#10B981' },
        { name: 'Post interact', color: '#A3E635' },
        // Add more items here
    ];

    return (
        <div className="flex flex-col p-4 bg-white rounded-lg shadow-md w-Sidebar">
            {toolboxItems.map((item, index) => (
                <div
                    key={index}
                    className="flex items-center p-4 mb-2 bg-white border rounded-lg cursor-pointer hover:bg-gray-50"
                    style={{ borderLeft: `4px solid ${item.color}` }}
                    draggable
                    onDragStart={(e) => {
                        e.dataTransfer.setData('application/reactflow', JSON.stringify(item));
                        e.dataTransfer.effectAllowed = 'move';
                    }}
                >
                    <span className="text-sm font-semibold">{item.name}</span>
                </div>
            ))}
        </div>
    );
};

export default ScriptTabs;
