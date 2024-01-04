import React from "react";
import "./index.css";
import { Handle, Position } from "reactflow";
export default function NodeComp({ value, onChange, options }) {
  return (
    <div className="main-wrapper">
      <Handle
        type="target"
        position={Position.Top}
        id="a"
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <div className="empty-block"></div>
      {/* <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select> */}
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        style={{ left:"100%", bottom: "50%" }}
      />
    </div>
  );
}
