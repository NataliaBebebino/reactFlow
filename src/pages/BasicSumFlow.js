import React, { useState } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  Background,
  Controls,
} from "reactflow";
import "reactflow/dist/style.css";
import classes from "./BasicFlow.module.css";

const initialNodes = [
  {
    id: "1",
    type: "output",
    data: { label: "0" },
    position: { x: 100, y: 100 },
  },
];

const BasicSumFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [state, setState] = useState(null);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onAdd = () => {
    const id = (nodes.length + 1).toString();
    const newNode = {
      id,
      data: { label: `${state.number}` },
      position: {
        x: 100,
        y: nodes[nodes.length - 1].position.y - 70,
      },
    };

    //Add new node
    setNodes((nds) => nds.concat(newNode));

    let newResult =
      parseInt(newNode.data.label) + parseInt(nodes[0].data.label);

    //Update result
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === "1") {
          node.data = {
            ...node.data,
            label: newResult.toString(),
          };
        }
        return node;
      })
    );

    console.log(edges, "estos son los edges");

    // Add edges (connections)
    let sourceNodeId = newNode.id;
    let targetNodeId = newNode.id - 1;

    console.log("sourceNodeId", sourceNodeId);
    console.log("targetNodeId", targetNodeId);

    let newEdge = {
      id: `${sourceNodeId}-${targetNodeId}`,
      source: sourceNodeId.toString(),
      target: targetNodeId.toString(),
      label: targetNodeId === 1 ? "=" : "+",
      animated: targetNodeId === 1,
    };
    setEdges((edgs) => edgs.concat(newEdge));
  };

  return (
    <div>
      <div className={classes.divContainer}>
        <input
          type="number"
          placeholder="Enter a number"
          onChange={(e) => {
            setState((prev) => ({ ...prev, number: e.target.value }));
          }}
        ></input>
        <button onClick={onAdd}>Add to the sum</button>
        <ReactFlow
          fitView /*This is to make it fit into the div container */
          proOptions={{
            hideAttribution: true,
          }} /*This is to delete the footer from the react-flow creators */
          nodes={nodes}
          edges={edges}
          onEdgesChange={onEdgesChange}
          onNodesChange={onNodesChange}
        >
          <Background color="red" /> {/* this is the color of the dots */}
          <Controls /> {/*this is to zoom in and out and other features */}
        </ReactFlow>
      </div>
    </div>
  );
};

export default BasicSumFlow;
