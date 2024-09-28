// src/components/RangeInputNumber/RangeInputNumber.jsx
import React from 'react';

const RangeInputNumber = ({ label, minValue, maxValue, onMinChange, onMaxChange, minLimit = 0, maxLimit = 100 ,className}) => {
  // Handle changes to the min and max inputs
  const handleMinChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (value < minLimit) value = minLimit; // Ensures the value doesn't go below the minimum limit
    if (value > maxValue) value = maxValue; // Ensures min doesn't exceed max
    onMinChange(value);
  };

  const handleMaxChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (value > maxLimit) value = maxLimit; // Ensures the value doesn't go above the maximum limit
    if (value < minValue) value = minValue; // Ensures max doesn't go below min
    onMaxChange(value);
  };

  return (
    <div className={`flex items-center justify-between gap-2 ${className}`}>
      {/* Conditionally render the label only if it is provided */}
      {label && (
        <label className="text-sm font-semibold w-52" dangerouslySetInnerHTML={{ __html: label }}></label>
      )}
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center p-1 bg-gray-100 border border-dashed rounded-md">
          <input
            type="number"
            value={minValue}
            onChange={handleMinChange}
            min={minLimit}
            max={maxLimit}
            className="w-20 text-center bg-transparent border-none appearance-none focus:outline-none"
          />
        </div>
        <span>To</span>
        <div className="flex items-center justify-center p-1 bg-gray-100 border border-dashed rounded-md">
          <input
            type="number"
            value={maxValue}
            onChange={handleMaxChange}
            min={minLimit}
            max={maxLimit}
            className="w-20 text-center bg-transparent border-none appearance-none focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default RangeInputNumber;
