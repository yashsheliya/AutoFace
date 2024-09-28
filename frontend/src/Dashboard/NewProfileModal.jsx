import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import LineNumberTextarea from './LineNumberTextarea';
import CustomDropdown from '../components/Ui/CustomDropdown'; // Import your CustomDropdown

const NewProfileModal = ({ open, handleClose }) => {
    const [addTags, setAddTags] = useState(false);
    const [tags, setTags] = useState('');
    const [addProxy, setAddProxy] = useState(false);
    const [proxyType, setProxyType] = useState('HTTP');

    const proxyOptions = [
        { value: 'HTTP', label: 'HTTP' },
        { value: 'Socks 4', label: 'Socks 4' },
        { value: 'Socks 5', label: 'Socks 5' },
        { value: 'SSH', label: 'SSH' },
    ];

    return (
        <Modal open={open} onClose={handleClose}>
            <Box className="absolute w-11/12 p-6 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg top-1/2 left-1/2 md:w-3/4 lg:w-1/2">
                {/* Header Section */}
                <div className='flex items-center justify-between mb-4'>
                    <div className="flex items-center gap-4">
                        <button onClick={handleClose} className='transition bg-gray-100 rounded-full w-11 h-11 hover:bg-gray-200'>
                            <CloseIcon className="text-2xl text-gray-600" />
                        </button>
                        <h5 className="text-2xl font-bold text-black">
                            NEW PROFILES
                        </h5>
                    </div>

                    {/* Add Button */}
                    <div className="flex justify-end">
                        <button className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600" onClick={() => alert('Profile added!')}>
                            ADD
                        </button>
                    </div>
                </div>

                <div className='overflow-y-auto max-h-[440px] pr-2'>
                    <p className="mb-2 text-gray-600 select-none">
                        <span className="font-bold">Account Format:</span> UID | Password | 2FA | Recovery email | Recovery email's password | Cookie | Date of birth
                    </p>

                    {/* LineNumberTextarea Component */}
                    <LineNumberTextarea 
                    placeholderText={`Enter the account information here, each account/line\nAccount format: UID | Password | 2FA | Recovery email | Recovery email's password | Cookie | Date of birth`} className='min-h-80 max-h-80' 
                    />

                    {/* Checkbox Section */}
                    <div className="flex flex-col mb-4 space-y-2">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="tags"
                                className="w-4 h-4 mr-2 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                                checked={addTags}
                                onChange={() => setAddTags(!addTags)}
                            />
                            <label htmlFor="tags" className="text-gray-600 select-none">Add tags</label>
                        </div>

                        {addTags && (
                            <input
                                value={tags}
                                onChange={(e) => setTags(e.target.value)}
                                className="w-full px-4 py-2 text-sm text-gray-500 border border-gray-300 border-dashed rounded-md outline-none"
                                placeholder="Enter tags here, each tag is separated by a comma. Ex: tag 1, tag 2"
                            />
                        )}

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="proxy"
                                className="w-4 h-4 mr-2 text-blue-500 border-gray-300 rounded outline-none"
                                checked={addProxy}
                                onChange={() => setAddProxy(!addProxy)}
                            />
                            <label htmlFor="proxy" className="text-gray-600 select-none">Add proxy</label>
                        </div>

                        {addProxy && (
                            <>
                                <CustomDropdown
                                    value={proxyType}
                                    onChange={(e) => setProxyType(e.target.value)}
                                    options={proxyOptions}
                                    placeholder="Select Proxy Type"
                                />

                                <LineNumberTextarea 
                                placeholderText={`Enter the proxy here\nProxy format: Host:Port:Username:Password\nProxy will be assigned to the new profiles in turn from top to bottom`} />
                            </>
                        )}
                    </div>
                </div>
            </Box>
        </Modal>
    );
};

export default NewProfileModal;
