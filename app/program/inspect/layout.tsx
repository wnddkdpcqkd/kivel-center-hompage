import TopButtonTab from "@/app/components/TopButtonTab";
import React from "react";

const tabs = [
  {
    label: "종합발달검사",
    url: "/program/treatment/total",
  },
  {
    label: "언어발달검사",
    url: "/program/treatment/language",
  },
  {
    label: "심리검사",
    url: "/program/treatment/psychology",
  },
  {
    label: "지능검사",
    url: "/program/treatment/intelligence",
  },
  {
    label: "감각통합검사",
    url: "/program/treatment/sensory",
  },
];
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="title3 md:title2 text-center pt-8">검사프로그램</div>
      <TopButtonTab tabs={tabs} />
      {children}
    </div>
  );
}
