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
    deletable: false,
  },
];

const BasicSumFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [enteredNumber, setEnteredNumber] = useState("");
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onAdd = () => {
    if (enteredNumber === "") {
      alert("Enter a valid number");
      return;
    }

    const id = (nodes.length + 1).toString();
    const newNode = {
      id,
      data: { label: `${enteredNumber}` },
      position: {
        x: 100,
        y: nodes[nodes.length - 1].position.y - 70,
      },
      deletable: false, // this is to disable the possibility of deleting the node
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

    // Add edges (connections)
    let sourceNodeId = newNode.id;
    let targetNodeId = newNode.id - 1;

    let newEdge = {
      id: `${sourceNodeId}-${targetNodeId}`,
      source: sourceNodeId.toString(),
      target: targetNodeId.toString(),
      label: targetNodeId === 1 ? "=" : "+",
      animated: targetNodeId === 1,
      deletable: false, // this is to disable the possibility of deleting the edge
    };
    setEdges((edgs) => edgs.concat(newEdge));

    setEnteredNumber("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onAdd();
    }
  };

  return (
    <div>
      <div className={classes.headerContainer}>
        <div className={classes.flexContainer}>
          <div className={classes.flexContainerItem}>
            <input
              className={classes.input}
              type="number"
              placeholder="Enter a number"
              value={enteredNumber}
              onChange={(e) => {
                setEnteredNumber(e.target.value);
              }}
              onKeyDown={handleKeyDown}
            ></input>
          </div>
          <div className={classes.flexContainerItem}>
            <button className={classes.button} onClick={onAdd}>
              Add to the sum
            </button>
          </div>
        </div>
      </div>
      <div className={classes.divContainer}>
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
          <Controls className={classes.control} />{" "}
          {/*this is to zoom in and out and other features */}
        </ReactFlow>
      </div>
    </div>
  );
};

export default BasicSumFlow;
