import React from "react";

export default function OperationGuideSection() {
  return (
    <div className={`bg-[url('../assets/images/centerDesk.png')]`}>
      <div className="w-full h-full bg-[rgba(255,255,255,0.7)] py-14">
        <div className="text-neutral-40 label6 text-center">operation</div>
        <div className="h5 text-center mt-2">운영 안내</div>

        <div className="flex justify-center mt-10 mb-10">
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
  );
}
