import React, { useCallback, memo } from "react";
import { Handle, Position } from "reactflow";
import "reactflow/dist/style.css";

function NumberNode() {
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

export default memo(NumberNode);
