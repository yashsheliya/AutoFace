import React, { useState } from 'react';
import Empty_profiles from '../assets/Images/Dashboard/add-new-profiles/add-new-profiles-nodata.png'
import NewProfileModal from './NewProfileModal';

const EmptyProfile = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className='flex items-center justify-center h-Dashboard '>
                <div className="py-6 text-center Empty_profiles_wrap">
                    {/* Illustration for Empty State */}
                    <div className="mb-6">
                        {/* You can replace this with an SVG or any graphic illustrating an empty state */}
                        <img
                            src={Empty_profiles} // Replace this with your actual image path
                            alt="Empty Profiles"
                        />
                    </div>
                    {/* Text for the empty state */}
                    <p className="text-lg text-gray-600">Start by adding the first profile</p>
                    {/* Button to add a new profile */}
                    <button
                        className="px-6 py-2 mt-4 font-semibold text-white transition bg-blue-500 rounded-md shadow-lg hover:bg-blue-600"
                        onClick={handleOpenModal}
                    >
                        NEW PROFILE
                    </button>

                    {/* Include the NewProfileModal Component */}
                    <NewProfileModal open={isModalOpen} handleClose={handleCloseModal} />

                </div>
            </div>
        </>
    );
};

export default EmptyProfile;
