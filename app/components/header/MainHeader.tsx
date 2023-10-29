"use client";
import { Logo } from "@/assets/svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function MainHeader() {
  const pathname = usePathname();
  return (
    <div className="px-9 flex itmes-center gap-x-10 fixed top-0 border-b w-full h-14 lg:h-[68px] bg-white">
      <div className="p-4 pl-0 flex items-center">
        <Logo />
      </div>
      <Link className={`flex items-center ${pathname == "/intro" && "text-primary-70 label5"}`} href={"/intro/center"}>
        <div className="body2">센터소개</div>
      </Link>
      <Link className={`flex items-center ${pathname == "/program" && "text-primary-70 label5"}`} href={"/program"}>
        <div className="body2">센터프로그램</div>
      </Link>
    </div>
  );
}
