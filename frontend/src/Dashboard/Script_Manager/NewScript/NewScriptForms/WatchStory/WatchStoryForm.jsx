// src/Dashboard/Script_Manager/NewScript/NewScriptForms/WatchStory/WatchStoryForm.jsx
import React from 'react';
import BackAndTitle from '../components/BackAndTitle/BackAndTitle';
import WatchStoryFormBody from './WatchStoryFormBody';

const WatchStoryForm = ({ onClose, title }) => {
    return (
        <>
            <BackAndTitle title={title} onBack={onClose} />
            <WatchStoryFormBody />
        </>
    );
};

export default WatchStoryForm;
