import React from "react";

interface MainContentProps {
  children: React.ReactNode;
}

export const MainContent: React.FC<MainContentProps> = ({ children }) => (
  <div className="flex-1 bg-[#1e1e1e] overflow-hidden h-[98%]">
    {children}
  </div>
);