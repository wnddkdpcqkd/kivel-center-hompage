import TopButtonTab from "@/app/components/TopButtonTab";
import React from "react";

const tabs = [
  {
    label: "언어치료",
    url: "/program/treatment/language",
  },
  {
    label: "감각통합치료",
    url: "/program/treatment/sensory",
  },
  {
    label: "놀이치료",
    url: "/program/treatment/play",
  },
  {
    label: "인지치료",
    url: "/program/treatment/recog",
  },
  {
    label: "미술치료",
    url: "/program/treatment/art",
  },
  {
    label: "특수체육",
    url: "/program/treatment/spPhysics",
  },
  {
    label: "그룹프로그램",
    url: "/program/treatment/group",
  },
];
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="title3 md:title2 text-center pt-8">치료프로그램</div>
      <TopButtonTab tabs={tabs} />
      {children}
    </div>
  );
}
