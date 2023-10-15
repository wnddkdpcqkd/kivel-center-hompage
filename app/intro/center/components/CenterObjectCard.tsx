import { CenterObject1 } from "@/assets/svg";
import React from "react";

interface CenterObjectCardProps {
  title: string;
  icon: React.ReactNode;
  content: string;
  tag: string[];
}

export default function CenterObjectCard({ title, icon, content, tag }: CenterObjectCardProps) {
  return (
    <div className="max-w-screen-sm md:max-w-[460px] rounded-3xl border border-neutral-30 overflow-hidden">
      <div className="pt-8 bg-[#ECF4F9] flex items-end justify-center">{icon}</div>
      <div className="p-6 md:py-8">
        <div className="h7 text-center">{title}</div>
        <div className="body2 mt-4 text-center">{content}</div>
        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          {tag.map((item, index) => {
            return (
              <div key={index} className="body2 px-3 py-1.5 rounded-[50px] bg-neutral-10">
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
