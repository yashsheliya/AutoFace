// src/components/BackAndTitle.jsx
import React from 'react';
import { MdArrowBack } from 'react-icons/md';

const BackAndTitle = ({ title, onBack }) => {
    return (
        <div className="flex items-center gap-4 pb-4 mb-4 border-b">
            <button
                onClick={onBack}
                className="p-2 text-xl text-gray-600 transition bg-gray-100 rounded-full hover:bg-gray-200"
            >
                <MdArrowBack />
            </button>
            <h3 className="text-lg font-semibold">{title}</h3>
        </div>
    );
};

export default BackAndTitle;
