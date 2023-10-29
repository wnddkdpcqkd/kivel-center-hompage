import Image from "next/image";
import React from "react";
import room from "@/assets/images/room.png";
import SpaceCarousel from "./components/SpaceCarousel";
export default function page() {
  return (
    <div>
      <div className="bg-[#F4EEEC]">
        <div className="relative flex max-w-7xl mx-auto">
          <div className="absolute h-full w-full space-gradient z-10"></div>
          <div className="px-4 pt-10 z-20 relative bg-transparent md:w-1/3 md:pt-20">
            <div className="h5 mt-2">키블센터 공간</div>
            <div className="mt-8 body1">{`아이들이 편안하고 쾌적한 공간에서 치료를 받을 수 있도록\n청결하게 관리하고 있습니다.`}</div>
          </div>

          <div className="relative md:w-2/3 w-full h-[450px] md:h-[376px]">
            <Image src={room} alt="" fill className="object-cover" />
          </div>
        </div>
      </div>

      <SpaceCarousel />
    </div>
  );
}
