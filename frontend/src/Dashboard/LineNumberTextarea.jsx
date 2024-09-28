// LineNumberTextarea.js
import React, { useState, useEffect, useRef } from 'react';

const LineNumberTextarea = ({ placeholderText, className }) => {
    const [inputValue, setInputValue] = useState('');
    const textareaRef = useRef(null);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    // Adjust textarea height dynamically based on content
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'; // Reset the height
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set it to match the content
        }
    }, [inputValue]);

    // Generate line numbers based on the number of lines in the textarea
    const generateLineNumbers = () => {
        const lines = inputValue ? inputValue.split('\n') : placeholderText.split('\n');
        return lines.map((_, index) => `${index + 1}.`);
    };

    // Ensure that only one set of min/max height classes is applied
    const combinedClassNames = [
        'relative flex p-4 mb-4 overflow-y-auto border border-gray-300 border-dashed rounded-md Line-text-scrolling',
        className || 'min-h-52 max-h-52', // Use default or provided className
    ].join(' ');
    
    return (
        <div className={combinedClassNames}>
            {/* Line numbers */}
            <div className="w-10 pr-2 text-right text-gray-400 select-none">
                {generateLineNumbers().map((number, index) => (
                    <div key={index} className="text-sm leading-5">
                        {number}
                    </div>
                ))}
            </div>

            {/* Textarea and placeholder overlay */}
            <div className="relative w-full">
                {/* Placeholder - displayed only when there's no input */}
                {!inputValue && (
                    <div className="absolute inset-0 p-2 ml-2 -mt-2 text-sm text-gray-500 whitespace-pre-wrap pointer-events-none">
                        {placeholderText}
                    </div>
                )}

                {/* Textarea */}
                <textarea
                    ref={textareaRef}
                    value={inputValue}
                    onChange={handleChange}
                    className="w-full pl-2 ml-2 text-sm text-gray-500 bg-transparent border-none outline-none resize-none focus:ring-0"
                    style={{ minHeight: '100%', whiteSpace: 'pre-wrap', overflow: 'hidden' }}
                    placeholder="" // Keep this empty since we're handling the placeholder ourselves
                />
            </div>
        </div>
    );
};

export default LineNumberTextarea;
