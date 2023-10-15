import React from "react";
import room from "@/assets/images/room.png";
import Image from "next/image";
export default function HowToComeSection() {
  return (
    <div className="py-14 md:py-20 px-4 md:px-9 bg-white md:flex justify-between">
      <div className="max-w-[460px] md:max-w-none">
        <div className="text-neutral-40 label5 text-center md:text-start">Visit us</div>
        <div className="h5 md:h4 text-center md:text-start mt-2">오시는 길</div>
        <div className="mt-10 title5 text-center md:text-start">찾아오시는 길</div>
        <div className="mt-1 body2 text-center md:text-start">{`경기도 시흥시 --- 5 - - - - - 2층\n(--역 --번 출구에서 366m)`}</div>

        <div className="mt-6 title5 text-center md:text-start">주차</div>
        <div className="mt-1 body2 text-center md:text-start">{`건물 내 주차가 불가하오니 뒷편 공영주차장을 이용해주시기 바랍니다.\n(최초 30분 1,000원 추가 10분 당 500원)`}</div>
      </div>

      <div className="flex flex-col flex-grow min-h-full max-w-[460px] relative rounded-2xl overflow-hidden">
        <Image src={room} alt="" fill className="w-52" />
      </div>
    </div>
  );
}
