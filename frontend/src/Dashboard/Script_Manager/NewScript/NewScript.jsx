// src/Dashboard/NewScript/NewScript.jsx
import React, { useState } from 'react';
import HeaderBreadcrumbPages from '../../components/HeaderBreadcrumbPages';
import NewScriptSidebar from './NewScriptSidebar';
import NewScriptBody from './NewScriptBody';

const NewScript = () => {
    const [activeEditNode, setActiveEditNode] = useState(null);

    return (
        <div className="p-4 font-inter">
            <HeaderBreadcrumbPages
                breadcrumbTitle="Create a new script"
                backPath="/dashboard/script-manager"
            />
            <div className="flex gap-4 mt-4 h-DashboardNewScript">
                <NewScriptSidebar activeEditNode={activeEditNode} setActiveEditNode={setActiveEditNode} />
                <NewScriptBody setActiveEditNode={setActiveEditNode} />
            </div>
        </div>
    );
};

export default NewScript;
