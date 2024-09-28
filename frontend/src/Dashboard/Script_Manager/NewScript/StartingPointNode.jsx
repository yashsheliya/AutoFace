// src/Dashboard/NewScript/StartingPointNode.jsx
import React from 'react';
import { Handle } from 'react-flow-renderer';
import { MdFlag } from 'react-icons/md';

const StartingPointNode = () => {
    return (
        <div className="flex items-center p-2 bg-white border rounded-lg shadow-md " style={{ width: '150px'}}>
            <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded">
                    <MdFlag className="text-xs text-blue-500" />
                </div>
                <span className="text-xs font-semibold text-black capitalize">Starting Point</span>
            </div>
            <Handle
                type="source"
                position="right"
                className="w-2 h-2 bg-black"
                style={{ borderRadius: '50%', background: '#3B82F6' }}
            />
        </div>
    );
};

export default StartingPointNode;
