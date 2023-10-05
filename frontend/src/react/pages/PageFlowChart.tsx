import React from "react";
import AppProvider from "../providers/AppProvider";
import FlowChart from "../features/FlowChart";

export function PageFlowChart() {
  return (
    <React.StrictMode>
      <AppProvider>
        <FlowChart />
      </AppProvider>
    </React.StrictMode>
  );
};
