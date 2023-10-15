import { Profile } from "@/assets/svg";
import Badge from "@/components/Badge";
import React from "react";

interface ReviewCardProps {
  tag: string[];
  content: string;
  name: string;
}
export default function ReviewCard({ tag, content, name }: ReviewCardProps) {
  return (
    <div className="p-6 rounded-2xl flex flex-col gap-y-4 min-w-[300px] bg-white ">
      <div className="flex">
        {tag.map((item, index) => {
          return <Badge key={index} label={item} />;
        })}
      </div>
      <div className="label4">{content}</div>
      <div className="flex items-center gap-x-2">
        <div className="w-8 h-8">
          <Profile />
        </div>
        <div className="body2">{name}</div>
      </div>
    </div>
  );
}
