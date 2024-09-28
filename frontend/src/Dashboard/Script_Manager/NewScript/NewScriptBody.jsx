// src/Dashboard/NewScript/NewScriptBody.jsx
import React, { useState } from 'react';
import ScriptCanvas from './ScriptCanvas';
import NewScriptHeader from './NewScriptHeader';
import { ReactFlowProvider } from 'react-flow-renderer';

const NewScriptBody = ({ setActiveEditNode }) => {
  // Manage nodes and edges state here
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  return (
    <div className="flex-1">
      {/* Pass nodes and edges to NewScriptHeader */}
      <NewScriptHeader nodes={nodes} edges={edges} />
      <ReactFlowProvider>
        {/* Pass setNodes and setEdges to ScriptCanvas */}
        <ScriptCanvas 
          setActiveEditNode={setActiveEditNode}
          nodes={nodes}
          setNodes={setNodes}
          edges={edges}
          setEdges={setEdges}
        />
      </ReactFlowProvider>
    </div>
  );
};

export default NewScriptBody;
