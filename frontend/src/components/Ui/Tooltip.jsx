// TooltipMaterialUI.js
import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} arrow />
))(({ theme }) => ({
    [`& .MuiTooltip-tooltip`]: {
        backgroundColor: '#fff', // White background
        color: 'black', // Black text color
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow
        borderRadius: '8px', // Rounded corners
        padding: '4px 8px', // Padding for the content
        maxWidth: 150, // Maximum width
        textAlign: 'center', // Center the text
        border: '1px solid #e5e7eb', // Light gray border
        fontSize: '0.875rem', // Font size
        fontFamily: 'Inter, sans-serif', // Add the Inter font family
    },
    [`& .MuiTooltip-arrow`]: {
        color: '#fff', // Arrow's background matches the tooltip background
        '&::before': {
            border: '1px solid #e5e7eb', // Border around the arrow matching the tooltip's border
            boxSizing: 'border-box',
        },
    },
}));

const TooltipMaterialUI = ({ children, title, placement = 'top' }) => {
    return (
        <CustomTooltip title={title} placement={placement} arrow>
            {children}
        </CustomTooltip>
    );
};

export default TooltipMaterialUI;
    