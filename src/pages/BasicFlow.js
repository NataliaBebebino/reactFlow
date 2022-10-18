import React, { useCallback, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";
import "reactflow/dist/style.css";
import classes from "./BasicFlow.module.css";

const initialNodes = [
  {
    id: "1",
    // type: "input",
    data: {
      label: "Hi",
    },
    position: { x: 100, y: 100 },
  },
  {
    id: "2",
    // type: "input",
    data: {
      label: "I'm Nati",
    },
    position: { x: 200, y: 200 },
  },
  {
    id: "3",
    // type: "input",
    data: {
      label: "a passionate",
    },
    position: { x: 100, y: 300 },
  },
  {
    id: "4",
    // type: "input",
    data: {
      label: "developer",
    },
    position: { x: 200, y: 400 },
  },
];

const initialEdges = [
  {
    id: "1-2",
    source: "1",
    target: "2",
    label: "flecha",
    type: "smoothstep",
  },
  {
    id: "2-3",
    source: "2",
    target: "3",
    type: "smoothstep",
  },
  {
    id: "3-4",
    source: "3",
    target: "4",
    type: "smoothstep",
  },
];


const BasicFlow = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  return (
    <div className={classes.divContainer}>
      <ReactFlow
        fitView /*This is to make it fit into the div container */
        proOptions={{hideAttribution:true}} /*This is to delete the footer from the react-flow creators */
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
      >
        <Background color="red" /> {/* this is the color of the dots */}
        <Controls /> {/*this is to zoom in and out and other features */}
      </ReactFlow>
    </div>
  );
};

export default BasicFlow;
