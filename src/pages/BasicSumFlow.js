import React, { useState } from "react";
import ReactFlow, {
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";

// const initialNodes = [
//   { id: "1", data: { label: "Node 1" }, position: { x: 100, y: 100 } },
//   { id: "2", data: { label: "Node 2" }, position: { x: 100, y: 200 } },
// ];

const initialNodes = [
  {
    id: "1",
    type: "output",
    data: { label: "0" },
    position: { x: 100, y: 100 },
  },
];

const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

const BasicSumFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);
  const [state, setState] = useState(null);

  const onAdd = () => {
    const id = (nodes.length + 1).toString();
    const newNode = {
      id,
      data: { label: `${state.number}` },
      position: {
        x: 0,
        y: 0 + (nodes.length + 1) * 20,
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

    console.log(newNode, "este es el nuevo nodo");
  };
  console.log(nodes, "estos son los nodos");

  return (
    <div>
      Number:
      <input
        type="number"
        onChange={(e) => {
          setState((prev) => ({ ...prev, number: e.target.value }));
        }}
      ></input>
      <button onClick={onAdd}>Add to the sum</button>
      <div style={{ width: "500px", height: "500px" }}>
        <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} />
      </div>
    </div>
  );
};

export default BasicSumFlow;
