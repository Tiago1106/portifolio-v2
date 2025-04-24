import React from "react";

interface ExplorerProps {
  renderTabContent: () => React.ReactNode;
}

export const Explorer: React.FC<ExplorerProps> = ({ renderTabContent }) => (
  <div className="w-[240px] bg-[#1e1e1e] text-sm text-white border-r border-[#3c3c3c]">
    <div className="flex flex-col p-2 font-mono text-[#d4d4d4] gap-1">
      {renderTabContent()}
    </div>
  </div>
);
