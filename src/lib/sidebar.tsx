import React from "react";
import { User, Folder, Mail } from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => (
  <div className="w-[60px] bg-[#252526] flex flex-col items-center pt-4 gap-4">
    {[
      { icon: User, tab: "sobre", label: "Sobre Mim" },
      { icon: Folder, tab: "projetos", label: "Projetos" },
      { icon: Mail, tab: "contato", label: "Contato" },
    ].map(({ icon: Icon, tab, label }) => (
      <div className="relative group" key={tab}>
        <Icon
          className={`text-[#cccccc] w-6 h-6 cursor-pointer hover:text-white ${
            activeTab === tab ? "text-white" : ""
          } transition-colors`}
          onClick={() => setActiveTab(tab)}
        />
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {label}
        </div>
      </div>
    ))}
  </div>
);