"use client";

import { useState } from "react";
import { content } from "@/content";
import { CodeBlock } from "@/lib/code-block";
import { EditorLayout } from "@/lib/editor-layout";
import { Header } from "@/lib/header";
import { Explorer } from "@/lib/explorer";
import { MainContent } from "@/lib/main-container";
import { Tabs } from "@/lib/tsbs";
import { Sidebar } from "@/lib/sidebar";

export default function Home() {
  const [currentFile, setCurrentFile] = useState("");
  const [openFiles, setOpenFiles] = useState<string[]>([]);

  const [activeTab, setActiveTab] = useState<string>("sobre");

  const fileTitles: Record<string, string> = {
    sobre: "Sobre.md",
    stacks: "Stacks.md",
    carreira: "Carreira.md",
    projeto1: "Projeto 1.md",
    projeto2: "Projeto 2.md",
    contato: "Contato.md",
  };

  const renderContent = () => {
    switch (currentFile) {
      case "sobre":
        return (
          <CodeBlock content={content.sobre} />
        );
      case "stacks":
        return (
          <CodeBlock content={content.stacks} />
        );
      case "carreira":
        return (
          <CodeBlock content={content.carreira} />
        );
      case "projeto1":
        return (
          <CodeBlock content={content.projeto1} />
        );
      case "projeto2":
        return (
          <CodeBlock content={content.projeto2} />
        );
      case "contato":
        return (
          <CodeBlock content={content.contato} />
        );
      default:
        return (
          <div className="h-full w-full flex items-center justify-center text-center text-[#7c7c7c] text-sm italic px-4">
            👨‍💻 Olá! <br />
            Use o menu à esquerda pra explorar sobre mim, ver meus projetos ou entrar em contato. <br />
          </div>
        );
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "sobre":
        return (
          <>
            <div
              className="cursor-pointer hover:bg-[#2a2d2e] px-2 py-1 rounded"
              onClick={() => handleOpenFile("sobre")}
            >
              📄 Sobre.md
            </div>
            <div
              className="cursor-pointer hover:bg-[#2a2d2e] px-2 py-1 rounded"
              onClick={() => handleOpenFile("carreira")}
            >
              📄 Carreira.md
            </div>
            <div
              className="cursor-pointer hover:bg-[#2a2d2e] px-2 py-1 rounded"
              onClick={() => handleOpenFile("stacks")}
            >
              📄 Stacks.md
            </div>
          </>
        );
      case "projetos":
        return (
          <>
            <div
              className="cursor-pointer hover:bg-[#2a2d2e] px-2 py-1 rounded"
              onClick={() => handleOpenFile("projeto1")}
            >
              📄 Projeto 1.md
            </div>
            <div
              className="cursor-pointer hover:bg-[#2a2d2e] px-2 py-1 rounded"
              onClick={() => handleOpenFile("projeto2")}
            >
              📄 Projeto 2.md
            </div>
          </>
        );
      case "contato":
        return (
          <div
            className="cursor-pointer hover:bg-[#2a2d2e] px-2 py-1 rounded"
            onClick={() => handleOpenFile("contato")}
          >
            📄 Contato.md
          </div>
        );
    }
  };


  const handleOpenFile = (file: string) => {
    if (!openFiles.includes(file)) {
      setOpenFiles([...openFiles, file]); // Adiciona à lista de arquivos abertos
    }
    setCurrentFile(file); // Torna o arquivo o arquivo atual
  };

  const handleCloseFile = (file: string) => {
    const index = openFiles.indexOf(file);
    const updatedFiles = openFiles.filter(f => f !== file);

    if (file === currentFile) {
      const previous = openFiles[index - 1];
      const next = openFiles[index + 1];

      if (previous) {
        setCurrentFile(previous);
      } else if (next) {
        setCurrentFile(next);
      } else {
        setCurrentFile("");
      }
    }

    setOpenFiles(updatedFiles);
  };

  return (
    <EditorLayout>
      <Header currentFile={currentFile} fileTitles={fileTitles} />
      <div className="flex-1 overflow-auto relative flex flex-row h-full">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <Explorer renderTabContent={renderTabContent} />
        <MainContent>
          <Tabs
            openFiles={openFiles}
            currentFile={currentFile}
            setCurrentFile={setCurrentFile}
            fileTitles={fileTitles}
            handleCloseFile={handleCloseFile}
          />
          <div className="p-4 overflow-auto h-full">{renderContent()}</div>
        </MainContent>
      </div>
    </EditorLayout>
  );
}
