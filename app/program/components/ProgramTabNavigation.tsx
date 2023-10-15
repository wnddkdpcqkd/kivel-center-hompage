"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const tabs = [
  {
    label: "이용안내",
    url: "/program",
  },
  {
    label: "치료프로그램",
    url: "/program/treatment",
  },
  {
    label: "검사프로그램",
    url: "/program/inspection",
  },
];
export default function ProgramTabNavigation() {
  const pathname = usePathname();
  return (
    <div className="flex md:items-center md:justify-center py-6">
      <div className="bg-neutral-10 rounded-xl flex">
        {tabs.map((item, index) => {
          return (
            <Link
              href={item.url}
              className={`body2 px-4 py-2 md:px-9 rounded-xl ${
                item.url == pathname && "bg-white border-primary-70 border text-primary-70"
              }`}
              key={index}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
