import React from "react";

interface HeaderProps {
  currentFile?: string;
  fileTitles: Record<string, string>;
}

export const Header: React.FC<HeaderProps> = ({ currentFile, fileTitles }) => (
  <div className="h-[32px] px-2 flex items-center relative">
    <div className="flex gap-2 h-full items-center">
      <div className="w-[10px] h-[10px] bg-red-500 rounded-full cursor-pointer"></div>
      <div className="w-[10px] h-[10px] bg-yellow-500 rounded-full cursor-pointer"></div>
      <div className="w-[10px] h-[10px] bg-green-500 rounded-full cursor-pointer"></div>
    </div>
    <div className="absolute left-1/2 transform -translate-x-1/2">
      <span className="text-[#969696] text-sm">
        {currentFile ? fileTitles[currentFile] : "Tiago.md"}
      </span>
    </div>
  </div>
);