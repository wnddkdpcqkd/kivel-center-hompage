import React, { ReactNode } from "react";
interface ProgramCardProps {
  subText: string;
  boldText: string;
  icon: ReactNode;
  description: string;
}
export default function ProgramCard({ boldText, description, icon, subText }: ProgramCardProps) {
  return (
    <div className="w-48 md:w-56 rounded-2xl border border-neutral-30 overflow-hidden">
      <div className="pt-8 pb-6 bg-white">
        <div className="body2 text-center">{subText}</div>
        <div className="mt-1 h6 text-center">{subText}</div>
      </div>
      <div className="bg-neutral-10 p-4 md:px-6 md:py-8">
        <div className="w-10 h-10 mx-auto">{icon}</div>
        <div className="mt-4 text-neutral-50 body2 text-center">{description}</div>
      </div>
    </div>
  );
}
