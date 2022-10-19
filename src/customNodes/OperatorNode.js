import React, { useCallback, memo } from "react";
import { Handle, Position } from "reactflow";
import "reactflow/dist/style.css";

const options = [
  {
    value: "+",
    label: "+",
  },
  {
    value: "-",
    label: "-",
  },
  {
    value: "*",
    label: "*",
  },
  {
    value: "/",
    label: "/",
  },
];

function OperatorNode() {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="number">Operator:</label>
        <select className="nodrag">
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle type="source" position={Position.Bottom} id="b" />
    </>
  );
}

export default memo(OperatorNode);
