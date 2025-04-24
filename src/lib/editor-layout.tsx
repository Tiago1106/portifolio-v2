import React from "react";

interface EditorLayoutProps {
  children: React.ReactNode;
}

export const EditorLayout: React.FC<EditorLayoutProps> = ({ children }) => (
  <div className="h-screen w-full flex bg-gradient-to-r from-indigo-600 to-indigo-700 items-center justify-center">
    <div className="h-[90%] w-[80%] text-white font-mono bg-[#1e1e1e] rounded-lg overflow-hidden flex flex-col relative">
      {children}
    </div>
  </div>
);
