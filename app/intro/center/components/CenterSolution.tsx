import { Candidate } from "@/assets/svg";
import React from "react";

interface CenterSolutionProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

export default function CenterSolution({ content, icon, title }: CenterSolutionProps) {
  return (
    <div className="max-w-[460px] md:max-w-[312px] w-full flex flex-col items-center mx-auto">
      <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
        <div className="w-11 h-11">{icon}</div>
      </div>
      <div className="h7 mt-6 text-center">{title}</div>
      <div className="body2 mt-4 text-center">{content}</div>
    </div>
  );
}
