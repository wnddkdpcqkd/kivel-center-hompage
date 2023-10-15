import React from "react";

interface ProgramCardProps {
  icon: React.ReactNode;
  step: string;
  title: string;
  content: string;
  emphasisWord: string;
}
export default function ProgramCard({ icon, step, title, content, emphasisWord }: ProgramCardProps) {
  const parts = content.split(emphasisWord);
  const coloredText = parts.map((part, index) => {
    return (
      <span className="body2" key={index}>
        {part}
        {index < parts.length - 1 && <span className="title5 text-primary-70">{emphasisWord}</span>}
      </span>
    );
  });
  return (
    <div className="flex items-center gap-x-6">
      <div className="w-10 h-10">{icon}</div>
      <div className="rounded-2xl bg-white p-6 gap-y-1 w-44 flex flex-col">
        <div className="text-center label5 text-neutral-50">{step}</div>
        <div className="h-[1px] w-full bg-neutral-30" />
        <div className="text-center h5">{title}</div>
      </div>

      <div className="flex-1">{coloredText}</div>
    </div>
  );
}
