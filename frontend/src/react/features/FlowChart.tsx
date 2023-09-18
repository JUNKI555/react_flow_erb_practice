// import React from "react";
// import ReactFlow, { Controls, Background } from "reactflow";
// import "reactflow/dist/style.css";

// const FlowChart = () => {
//   return (
//     <div style={{ height: '100%' }}>
//       <ReactFlow>
//         <Background />
//         <Controls />
//       </ReactFlow>
//     </div>
//   );
// };

// export default FlowChart;

import React, { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
  Node,
  Edge,
  OnConnect,
} from 'reactflow';

const initialNodes: Node[] = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];

const initialEdges: Edge[] = [{ id: 'e1-2', source: '1', target: '2' }];

function FlowChart() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect: OnConnect = useCallback((connection) => setEdges((eds) => addEdge(connection, eds)), [setEdges]);

  return (
    <div style={{ width: '80vw', height: '70vh' }}>
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      panOnScroll
      selectionOnDrag
      panOnDrag={[1,2]}
    >
      <MiniMap />
      <Controls />
      <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
    </ReactFlow>
    </div>
  );
}

export default FlowChart;