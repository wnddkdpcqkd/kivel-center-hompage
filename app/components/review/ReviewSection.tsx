import React from "react";
import ReviewCard from "./ReviewCard";
import { Pagination } from "@/components/Pagination";

export default function ReviewSection() {
  return (
    <div className="py-8 md:p-9 bg-neutral-10">
      <div className="h5 text-center mt-2 mb-10 md:mb-16">후기</div>

      <div className="flex gap-x-4 md:gap-x-6 ">
        <ReviewCard
          tag={["언어발달검사"]}
          content={"치료사 선생님께서 상담을 매우 자세하게 해주셔서 우리 아이의 증상에 대해 정확하게 알게되었습니다."}
          name={"박**"}
        />
        <ReviewCard
          tag={["언어발달검사"]}
          content={"치료사 선생님께서 상담을 매우 자세하게 해주셔서 우리 아이의 증상에 대해 정확하게 알게되었습니다."}
          name={"박**"}
        />
        <ReviewCard
          tag={["언어발달검사"]}
          content={"치료사 선생님께서 상담을 매우 자세하게 해주셔서 우리 아이의 증상에 대해 정확하게 알게되었습니다."}
          name={"박**"}
        />
        <ReviewCard
          tag={["언어발달검사"]}
          content={"치료사 선생님께서 상담을 매우 자세하게 해주셔서 우리 아이의 증상에 대해 정확하게 알게되었습니다."}
          name={"박**"}
        />
        <ReviewCard
          tag={["언어발달검사"]}
          content={"치료사 선생님께서 상담을 매우 자세하게 해주셔서 우리 아이의 증상에 대해 정확하게 알게되었습니다."}
          name={"박**"}
        />
      </div>
      <div className="mt-10">
        <Pagination length={3} index={0} />
      </div>
    </div>
  );
}
