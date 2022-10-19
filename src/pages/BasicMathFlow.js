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

import NumberNode from "../customNodes/NumberNode";
import OperatorNode from "../customNodes/OperatorNode";
// import ResultNode from "../customNodes/ResultNode";

const nodeTypes = {
  number: NumberNode,
  operator: OperatorNode,
  // result: ResultNode,
};

const initialNodes = [
  {
    id: "1",
    type: "number",
    data: { label: 0 },
    position: { x: 100, y: 100 },
  },
  {
    id: "2",
    type: "operator",
    position: { x: 200, y: 200 },
  },
  {
    id: "3",
    type: "number",
    data: { label: 0 },
    position: { x: 100, y: 300 },
  },
  {
    id: "4",
    type: "output",
    //type: "result",
    data: { label: 0 },
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

const BasicMathFlow = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [result, setResult] = useState(0);

  useEffect(() => {
      console.log("console", nodes[0].data.label)

    // setResult()
  }, [nodes])

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

export default BasicMathFlow;
