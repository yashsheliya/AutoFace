// CustomDropdown.js
import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControl from '@mui/material/FormControl';

const CustomDropdown = ({ value, onChange, options, placeholder }) => {
    return (
        <FormControl fullWidth variant="outlined" sx={{ position: 'relative', minWidth: 120, marginBottom: '16px' }}>
            <Select
                value={value}
                onChange={onChange}
                displayEmpty
                IconComponent={ExpandMoreIcon}
                sx={{
                    height: '40px',
                    borderRadius: '8px',
                    '.MuiOutlinedInput-notchedOutline': {
                        borderColor: '#E5E7EB', // Default border color
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#E5E7EB', // Remove the border color on focus
                        borderWidth: '1px'
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#E5E7EB', // Remove the hover border color
                        borderWidth: '1px'
                    },
                    '& .MuiSelect-select': {
                        padding: '8px 14px',
                        fontSize: '14px',
                        color: value ? '#4B5563' : '#9CA3AF', // Gray text if no value is selected
                    },
                }}
                renderValue={(selected) => {
                    if (!selected) {
                        return <span className="text-gray-400">{placeholder}</span>; // Show the placeholder when no value is selected
                    }
                    return selected;
                }}
                MenuProps={{
                    PaperProps: {
                        sx: {
                            borderRadius: '8px',
                            mt: 1,
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                            '& .MuiMenuItem-root': {
                                fontSize: '14px',
                                padding: '10px 16px',
                                '&.Mui-selected': {
                                    backgroundColor: '#E5F3FF',
                                    color: '#2563EB',
                                },
                                '&:hover': {
                                    backgroundColor: '#E5F3FF',
                                    color: '#2563EB',
                                },
                            },
                        },
                    },
                }}
            >
                <MenuItem disabled value="">
                    <em>{placeholder}</em>
                </MenuItem>
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default CustomDropdown;
