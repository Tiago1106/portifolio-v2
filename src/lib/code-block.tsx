interface CodeBlockProps {
  content: string;
}

export const CodeBlock = ({ content }: CodeBlockProps) => {

  return (
    <div className="flex text-sm text-[#cccccc] font-mono">
      {/* Números das linhas */}

      {/* Conteúdo */}
      <div className="pl-4 whitespace-pre-wrap">
        {content.split("\n").map((line, i) => (
          <div key={i} className="min-h-[24px] leading-[24px]">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};
