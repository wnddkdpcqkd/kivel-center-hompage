import React from "react";
import centerDesk from "@/assets/images/centerDesk.png";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <div className="bg-[#F4EEEC]">
        <div className="relative flex max-w-7xl mx-auto">
          {/* gradient */}
          <div className="absolute h-full w-full space-gradient z-10"></div>
          {/* 1/3 */}
          <div className="px-4 md:px-9 pt-10 z-20 relative bg-transparent md:w-1/3 md:pt-20"></div>
          {/* 2/3 */}
          <div className="relative md:w-2/3 w-full h-[450px] md:h-[376px]">
            <Image src={centerDesk} alt="" fill className="object-cover" />
          </div>

          <div className="absolute px-4 md:px-9 z-30 pt-10 md:pt-20">
            <div className="text-neutral-40 label5">Visit us</div>
            <div className="h5 mt-2">연락처 / 운영 시간</div>
            <div className="flex justify-start mt-6 mb-6">
              <div>
                <div className="title5 w-16">유선전화</div>
                <div className="title5 w-16 mt-2">운영시간</div>
              </div>
              <div>
                <div className="body2">02 - 123 - 5678</div>
                <div className="body2 mt-2">월~금 | 10:00 - 19:00</div>
                <div className="body2 mt-2">토요일 | 10:00 - 17:00</div>
              </div>
            </div>
            <div className="body3 text-neutral-60 text-center">유선 전화 혹은 홈페이지를 통해 상담 신청 후 센터에 방문해 주세요.</div>
          </div>
        </div>
      </div>

      <div className="py-14 lg:py-20 px-4 lg:px-9 bg-white lg:flex justify-between">
        <div className="max-w-[460px] lg:max-w-none mx-auto">
          <div className="h5 lg:h4 text-center lg:text-start mt-2">오시는 길</div>
          <div className="mt-10 title5 text-center lg:text-start">찾아오시는 길</div>
          <div className="mt-1 body2 text-center lg:text-start">{`경기도 시흥시 --- 5 - - - - - 2층\n(--역 --번 출구에서 366m)`}</div>

          <div className="mt-6 title5 text-center lg:text-start">주차</div>
          <div className="mt-1 body2 text-center lg:text-start">{`건물 내 주차가 불가하오니 뒷편 공영주차장을 이용해주시기 바랍니다.\n(최초 30분 1,000원 추가 10분 당 500원)`}</div>
        </div>

        <div className="flex flex-col flex-grow min-h-full lg:max-w-[460px] aspect-[4/3] mt-10 lg:mt-0  relative rounded-2xl overflow-hidden bg-green-300">
          ㅇㅁㅈ
        </div>
      </div>
    </div>
  );
}
