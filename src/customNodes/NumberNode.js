import React, { useCallback, memo , useState} from "react";
import { Handle, Position } from "reactflow";
import "reactflow/dist/style.css";
import classes from "./NumberNode.module.css";


function NumberNode() {
  const [enteredNumber, setEnteredNumber] = useState(0);

  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
    setEnteredNumber(evt.target.value)
  }, []);

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div>
        <label htmlFor="number">Number:</label>
        <input min={0} max={1000} name="number" type="number" onChange={onChange} />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle type="source" position={Position.Bottom} id="b" />
    </>
  );
}

export default memo(NumberNode);
