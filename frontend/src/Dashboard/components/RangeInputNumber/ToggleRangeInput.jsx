// src/components/ToggleRangeInput/ToggleRangeInput.jsx
import React, { useState } from 'react';
import RangeInputNumber from '../RangeInputNumber/RangeInputNumber';

const ToggleRangeInput = ({ label, subLabel, minLimit = 1, maxLimit = 100, defaultMin = 1, defaultMax = 2 , className}) => {
    const [isChecked, setIsChecked] = useState(false);
    const [range, setRange] = useState({ min: defaultMin, max: defaultMax });

    // Handle checkbox toggle
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className={`flex items-center justify-between gap-2 ${className}`}>
            {/* Checkbox */}
            <div className='flex items-center gap-2'>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="cursor-pointer"
                />
                {/* Label */}
                <label className="text-sm font-semibold text-black cursor-pointer select-none" onClick={handleCheckboxChange}>
                    {label}
                    {isChecked && (
                        <span className="font-normal">{subLabel}</span>
                    )}:
                </label>
            </div>

            {/* Conditionally render the RangeInputNumber component */}
            {isChecked && (
                <RangeInputNumber
                    label=""
                    minValue={range.min}
                    maxValue={range.max}
                    onMinChange={(value) => setRange((prev) => ({ ...prev, min: value }))}
                    onMaxChange={(value) => setRange((prev) => ({ ...prev, max: value }))}
                    minLimit={minLimit}
                    maxLimit={maxLimit}
                />
            )}
        </div>
    );
};

export default ToggleRangeInput;
