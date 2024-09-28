// src/Dashboard/NewScript/ScriptCanvas.jsx
import React, { useCallback, useRef, useEffect } from 'react';
import ReactFlow, {
    addEdge,
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    useReactFlow,
    MarkerType,
} from 'react-flow-renderer';
import StartingPointNode from './StartingPointNode';
import CustomNode from './CustomNode';

// Define custom node types for React Flow
const nodeTypes = {
    startingPoint: StartingPointNode,
    customNode: CustomNode,
};

// Define custom edge styles
const edgeOptions = {
    style: { strokeWidth: 2, stroke: '#3b82f6' },
    animated: false,
    markerEnd: {
        type: MarkerType.ArrowClosed,
    },
};

// Initial node structure for the starting point
const defaultStartingNode = {
    id: 'starting-point',
    type: 'startingPoint',
    position: { x: 300, y: 200 },
    data: {},
    draggable: true, // Make sure draggable is true to allow movement
};

const ScriptCanvas = ({ setActiveEditNode, nodes, setNodes, edges, setEdges }) => {
    const reactFlowWrapper = useRef(null);
    const { project, fitView } = useReactFlow();

    // React Flow state management
    const [localNodes, setLocalNodes, onNodesChange] = useNodesState([defaultStartingNode]);
    const [localEdges, setLocalEdges, onEdgesChange] = useEdgesState([]);

    // Sync the local state with the parent state if provided
    useEffect(() => {
        setNodes(localNodes);
    }, [localNodes, setNodes]);

    useEffect(() => {
        setEdges(localEdges);
    }, [localEdges, setEdges]);

    // Ensure the starting point node always exists and can be freely moved
    useEffect(() => {
        if (!localNodes.find((node) => node.id === defaultStartingNode.id)) {
            setLocalNodes((nds) => [...nds, defaultStartingNode]);
        }
    }, [localNodes, setLocalNodes]);

    // Handle new connections between nodes
    const onConnect = useCallback(
        (params) => setLocalEdges((eds) => addEdge({ ...params, ...edgeOptions }, eds)),
        [setLocalEdges]
    );

    // Handle dropping of new nodes onto the canvas
    const onDrop = useCallback(
        (event) => {
            event.preventDefault();
            const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
            const nodeData = JSON.parse(event.dataTransfer.getData('application/reactflow'));

            // Calculate the position of the dropped node
            const position = project({
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top,
            });

            // Create a new node with the provided data
            const newNode = {
                id: `${nodeData.type}-${+new Date()}`, // Unique ID
                type: 'customNode',
                position: position || { x: 0, y: 0 }, // Fallback to {x:0, y:0} if position is undefined
                data: {
                    label: nodeData.name,
                    icon: nodeData.icon,
                    color: nodeData.color,
                    bgColor: nodeData.bgColor,
                    setNodes: setLocalNodes, // Pass local setNodes function
                    setActiveEditNode, // Provide the function to set active edit node
                },
            };

            // Add the new node to the existing nodes
            setLocalNodes((nds) => nds.concat(newNode));
        },
        [project, setLocalNodes, setActiveEditNode]
    );

    // Allow unrestricted node movements, including the starting point
    const filteredNodesChange = useCallback(
        (changes) => {
            onNodesChange(changes);
        },
        [onNodesChange]
    );

    // Prevent dragging over the React Flow container
    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    // Adjust the view to fit all nodes on the canvas
    useEffect(() => {
        fitView({ padding: 0.2 });
    }, [fitView]);

    return (
        <div
            className="mt-5 border rounded-xl h-Canvas bg-gray-50"
            ref={reactFlowWrapper}
            onDrop={onDrop}
            onDragOver={onDragOver}
        >
            <ReactFlow
                nodes={localNodes}
                edges={localEdges}
                onNodesChange={filteredNodesChange} // Allow node movements
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                fitView
            >
                {/* Additional React Flow features */}
                <MiniMap />
                <Controls />
                <Background gap={16} />
            </ReactFlow>
        </div>
    );
};

export default ScriptCanvas;
