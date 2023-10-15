"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const tabs = [
  {
    label: "키블 센터 소개",
    url: "/intro/center",
  },
  {
    label: "전문가 소개",
    url: "/intro/expert",
  },
  {
    label: "공간 둘러보기",
    url: "/intro/space",
  },
  {
    label: "운영 안내",
    url: "/intro/operation",
  },
];
export default function TabNavigation() {
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
