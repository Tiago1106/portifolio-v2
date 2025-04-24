import { X } from "lucide-react";
import React from "react";

interface TabsProps {
  openFiles: string[];
  currentFile: string;
  setCurrentFile: (file: string) => void;
  fileTitles: Record<string, string>;
  handleCloseFile: (file: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({ openFiles, currentFile, setCurrentFile, fileTitles, handleCloseFile }) => (
  <div className={`w-full flex ${openFiles.length > 0 ? "border-b border-[#3c3c3c]" : ""}`}>
    {openFiles.map(file => (
      <div
        key={file}
        className={`flex flex-row items-center cursor-pointer text-sm text-[#969696] hover:text-white px-4 py-2 ${currentFile === file ? "bg-[#333333] text-white" : ""}`}
        onClick={() => setCurrentFile(file)}
      >
        {fileTitles[file] || file}
        <span
          className="ml-2 text-[#d4d4d4] cursor-pointer hover:text-white"
          onClick={(e) => {
            e.stopPropagation();
            handleCloseFile(file);
          }}
        >
          <X className="w-3 h-3" />
        </span>
      </div>
    ))}
  </div>
);