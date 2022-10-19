import React, { useCallback, useState, useMemo, useEffect } from "react";
import ReactFlow, {
  Background,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
  Handle,
  Position,
} from "reactflow";
import "reactflow/dist/style.css";
import classes from "./BasicFlow.module.css";

function TextUpdaterNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="number">Number:</label>
        <input id="text" name="number" onChange={onChange} />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle type="source" position={Position.Bottom} id="b" />
    </>
  );
}

const initialNodes = [
  {
    id: "1",
    type: "textUpdater",
    position: { x: 100, y: 100 },
  },
  {
    id: "2",
    type: "textUpdater",
    position: { x: 200, y: 200 },
  },
  {
    id: "3",
    type: "textUpdater",
    position: { x: 100, y: 300 },
  },
  {
    id: "4",
    type: "output",
    data: { label: 2 },
    position: { x: 200, y: 400 },
  },
];

const initialEdges = [
  {
    id: "1-2",
    source: "1",
    target: "2",
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
    label: "=",
    animated: "true",
  },
];

const MathFlow = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [result, setResult] = useState(0);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const nodeTypes = useMemo(() => ({ textUpdater: TextUpdaterNode }), []);

  return (
    <div className={classes.divContainer}>
      <ReactFlow
        fitView /*This is to make it fit into the div container */
        proOptions={{
          hideAttribution: true,
        }} /*This is to delete the footer from the react-flow creators */
        nodes={nodes}
        nodeTypes={nodeTypes}
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

export default MathFlow;
