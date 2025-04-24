import React from "react";

interface MainContentProps {
  children: React.ReactNode;
}

export const MainContent: React.FC<MainContentProps> = ({ children }) => (
  <div className="flex flex-col flex-1 overflow-hidden">
    {children}
  </div>
);