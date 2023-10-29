"use client";
import { Call } from "@/assets/svg";
import { Button } from "@/components/Button";
import Image, { StaticImageData } from "next/image";
import React from "react";

export default function ImageDesc({
  image,
  buttonLabel,
  buttonUrl,
  treatment,
  content,
}: {
  treatment: string;
  content: string;
  image: StaticImageData;
  buttonLabel: string;
  buttonUrl: string;
}) {
  return (
    <div className="px-4 py-6 md:px-9 md:py-20 md:flex max-w-5xl mx-auto">
      <div className="md:flex-1">
        <div className="h4">언어치료</div>
        <div className="body1 mt-6 md:mt-10">
          표준화된 평가도구를 사용하여 <span className="title4">정확한 언어 발달 수준을 확인하고 체계적인 목표를 수립</span>합니다. 말과
          언어의 이해, 표현, 의사소통기능 발달을 위해 적절한 언어모델을 제시하고 다양한 교구와 놀이 환경을 통해 언어 발달을 돕고 나아가
          문제행동을 중재, 인지 정서 및 사회성 발달 프로그램을 제공합니다.
        </div>
        <div className="flex mt-6">
          <Button onClick={() => {}} text={buttonLabel} kind={"lightSolid"} size={"small"} icon={<Call className="w-[18px] h-[18px]" />} />
        </div>
      </div>
      <div className="mt-10 md:mt-0 md:ml-10 md:flex-1">
        <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden">
          <Image fill src={image} alt="" />
        </div>
      </div>
    </div>
  );
}
