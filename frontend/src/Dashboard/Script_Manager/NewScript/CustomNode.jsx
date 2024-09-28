import React, { useState } from 'react';
import { Handle } from 'react-flow-renderer';
import IconWrapper from './IconWrapper';
import { FiMoreVertical } from 'react-icons/fi';
import { MdAccessTime } from 'react-icons/md';
import ClickAwayListener from '@mui/material/ClickAwayListener';

const CustomNode = ({ data, id }) => {
    const [showMenu, setShowMenu] = useState(false);

    // Toggle the display of the context menu
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    // Handle edit action
    const handleEdit = () => {
        data.setActiveEditNode({ id, data });
        setShowMenu(false);
    };

    // Handle delete action
    const handleDelete = () => {
        if (data.setNodes) {
            data.setNodes((nodes) => nodes.filter((node) => node.id !== id));
            data.setActiveEditNode(null);
        }
    };

    return (
        <div className="relative flex items-center p-2 bg-white border rounded-lg shadow-md" style={{ width: '180px' }}>
            {/* Icon and Label */}
            <div className="flex items-center flex-grow gap-2">
                <div
                    className="flex items-center justify-center w-8 h-8 rounded-md"
                    style={{
                        backgroundColor: data.bgColor || '#E5E7EB', // Use bgColor from data or default light grey
                        color: data.color || '#374151',             // Use color from data or default dark grey
                    }}
                >
                    <IconWrapper iconName={data.icon} style={{ color: data.color || '#374151' }} /> {/* Ensure icon color is set */}
                </div>
                <div>
                    <span className="block text-xs font-semibold text-black capitalize">{data.label}</span>
                    <span className="flex items-center text-gray-500 text-8">
                        <MdAccessTime className="mr-1" /> 5 min
                    </span>
                </div>
            </div>

            {/* Three dots (Menu trigger) */}
            <div className="relative ml-auto cursor-pointer">
                <FiMoreVertical className="w-3 h-4 text-xs text-gray-800 bg-gray-200 rounded-sm hover:text-black" onClick={toggleMenu} />
                
                {/* Context Menu */}
                {showMenu && (
                    <ClickAwayListener onClickAway={() => setShowMenu(false)}>
                        <div className="absolute right-0 z-10 mt-1 bg-white border rounded shadow-md w-14">
                            <div
                                className="px-4 py-1 text-gray-700 cursor-pointer text-8 hover:bg-gray-200"
                                onClick={handleEdit}
                            >
                                Edit
                            </div>
                            <div
                                className="px-4 py-1 text-red-500 cursor-pointer text-8 hover:bg-gray-200"
                                onClick={handleDelete}
                            >
                                Delete
                            </div>
                        </div>
                    </ClickAwayListener>
                )}
            </div>

            {/* Left handle for connections (Target) */}
            <Handle
                type="target"
                position="left"
                className="w-2 h-2 bg-black"
                style={{ borderRadius: '50%', background: '#3B82F6' }}
            />

            {/* Right handle for connections (Source) */}
            <Handle
                type="source"
                position="right"
                className="w-2 h-2 bg-black"
                style={{ borderRadius: '50%', background: '#3B82F6' }}
            />
        </div>
    );
};

export default CustomNode;
