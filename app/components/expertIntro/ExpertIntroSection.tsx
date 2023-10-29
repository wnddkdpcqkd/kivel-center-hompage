import React from "react";
import ExpertCard from "./ExpertCard";

export default function ExpertIntroSection() {
  return (
    <div className="py-8 md:p-9 bg-neutral-10">
      <div className="h5 text-center mt-2 mb-10 md:mb-16">키블센터의 프로그램</div>
      <div className="flex md:justify-center gap-x-4 md:gap-x-8">
        <div className="w-56 md:w-60">
          <ExpertCard
            name={"신지원"}
            position={"센터원장"}
            carrer={"현) 일산 M 의원 사회성발달클리닉 부원장"}
            eduCarrer={"가톨릭대학교 의과대학 졸업\n서호주대학교 학사 (신경과학 전공)"}
            certify={"자폐성 장애의 유전적 요인에 대한 연구(Harry Perkins Institute of Medical Research, 2017)"}
          />
        </div>
        <div className="w-56 md:w-60">
          <ExpertCard
            name={"신지원"}
            position={"센터원장"}
            carrer={"현) 일산 M 의원 사회성발달클리닉 부원장"}
            eduCarrer={"가톨릭대학교 의과대학 졸업\n서호주대학교 학사 (신경과학 전공)"}
            certify={"자폐성 장애의 유전적 요인에 대한 연구(Harry Perkins Institute of Medical Research, 2017)"}
          />
        </div>
        <div className="w-56 md:w-60">
          <ExpertCard
            name={"신지원"}
            position={"센터원장"}
            carrer={"현) 일산 M 의원 사회성발달클리닉 부원장"}
            eduCarrer={"가톨릭대학교 의과대학 졸업\n서호주대학교 학사 (신경과학 전공)"}
            certify={"자폐성 장애의 유전적 요인에 대한 연구(Harry Perkins Institute of Medical Research, 2017)"}
          />
        </div>
        <div className="w-56 md:w-60">
          <ExpertCard
            name={"신지원"}
            position={"센터원장"}
            carrer={"현) 일산 M 의원 사회성발달클리닉 부원장"}
            eduCarrer={"가톨릭대학교 의과대학 졸업\n서호주대학교 학사 (신경과학 전공)"}
            certify={"자폐성 장애의 유전적 요인에 대한 연구(Harry Perkins Institute of Medical Research, 2017)"}
          />
        </div>
      </div>
    </div>
  );
}
