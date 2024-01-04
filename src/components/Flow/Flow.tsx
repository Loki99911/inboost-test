import { useCallback } from "react";
import ReactFlow, {
  Node,
  addEdge,
  Edge,
  Connection,
  useNodesState,
  useEdgesState,
  MarkerType,
} from "reactflow";

import "reactflow/dist/style.css";
import NodeComp from "../NodeComp/NodeComp";
const nodeTypes = { selectNodeType: NodeComp };

const initialNodes: Node[] = [
  {
    id: "1",
    type: "selectNodeType",
    data: { label: "Node 1" },
    position: { x: 0, y: 0 },
  },
  {
    id: "2",
    type: "selectNodeType",
    data: { label: "Node 2" },
    position: { x: 195, y: 220 },
  },
  {
    id: "3",
    type: "selectNodeType",
    data: { label: "Node 3" },
    position: { x: 515, y: 365 },
  },
  {
    id: "4",
    type: "selectNodeType",
    data: { label: "Node 4" },
    position: { x: 790, y: 550 },
  },
];

const initialEdges: Edge[] = [
  {
    id: "e1-2",
    type: "smoothstep",
    source: "1",
    target: "2",
    markerEnd: {
      type: MarkerType.Arrow,
    },
  },
  {
    id: "e2-3",
    type: "smoothstep",
    source: "2",
    target: "3",
    markerEnd: {
      type: MarkerType.Arrow,
    },
  },
  {
    id: "e3-4",
    type: "smoothstep",
    source: "3",
    target: "4",
    markerEnd: {
      type: MarkerType.Arrow,
    },
  },
];

const BasicFlow = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((els) => addEdge(params, els)),
    [setEdges]
  );
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
    />
  );
};

export default BasicFlow;
