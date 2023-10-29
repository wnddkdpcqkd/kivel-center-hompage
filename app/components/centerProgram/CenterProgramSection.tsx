import React from "react";
import ProgramCard from "./ProgramCard";
import { HomeStar, Inform, ReportCheck } from "@/assets/svg";

export default function CenterProgramSection() {
  return (
    <div className="py-14 md:py-20">
      <div className="h5 text-center mt-2">키블센터의 프로그램</div>

      <div className="flex mt-10 items-center gap-x-4 md:gap-x-8 justify-center">
        <ProgramCard
          subText={"1:1 맞춤 검사 및 상담"}
          boldText={"검사 프로그램"}
          icon={<ReportCheck />}
          description={"우리 아이를 정확하게\n알고 싶어요"}
        />
        <ProgramCard
          subText={"체계적인 상담 절차"}
          boldText={"상담 프로그램"}
          icon={<Inform />}
          description={"발달 고민을\n해결하고 싶어요"}
        />
        <ProgramCard
          subText={"대면 상담 같은 효과"}
          boldText={"온라인 상담"}
          icon={<HomeStar />}
          description={"집에서 편하게\n상담하고 싶어요"}
        />
      </div>
    </div>
  );
}
