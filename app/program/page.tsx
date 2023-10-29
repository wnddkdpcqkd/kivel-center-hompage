import React from "react";
import ProgramTabNavigation from "./components/ProgramTabNavigation";
import hand from "@/assets/images/hand.png";
import Image from "next/image";
import { Call, Chat, CheckList, Clipboard, DateIcon } from "@/assets/svg";
import ProgramCard from "./components/ProgramCard";
export default function page() {
  return (
    <div className="pt-14">
      <ProgramTabNavigation />

      <div className="bg-[#F4EEEC]">
        <div className="relative flex max-w-7xl mx-auto">
          {/* gradient */}
          <div className="absolute h-full w-full space-gradient z-10"></div>
          {/* 1/3 */}
          <div className="px-4 md:px-9 pt-10 z-20 relative bg-transparent md:w-1/3 md:pt-20"></div>
          {/* 2/3 */}
          <div className="relative md:w-2/3 w-full h-[450px] md:h-[376px]">
            <Image src={hand} alt="" fill className="object-cover" />
          </div>

          <div className="absolute w-full px-4 md:px-9 z-30 pt-10 md:pt-20">
            <div className="h4 mt-2">키블의 약속</div>
            <div className="mt-8">
              <div className="flex items-center justfiy-center">
                <div className="w-6 h-6 rounded bg-white text-neutral-40 flex items-center justify-center">1</div>
                <div className="ml-4 body1 flex">
                  분야별 전문가와 함께 <div className="title4">정확한 평가 및 중재</div>를 실천합니다.
                </div>
              </div>
              <div className="flex items-center justfiy-center mt-3">
                <div className="w-6 h-6 rounded bg-white text-neutral-40 flex items-center justify-center">1</div>
                <div className="ml-4 body1 flex">
                  분야별 전문가와 함께 <div className="title4">독립적, 사회적 활동</div>를 실천합니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 px-9">
        <div className="h5 mt-2">발달 상황을 다각도로 분석하고, 최적화된 치료 프로그램을 계획합니다.</div>
        <div className="mt-6 body2">{`모든 아이들은 각자만의 속도와 장점을 가지고 발달합니다.\n우리 아이가 어느 부분이 잘 발달하고, 어느 부분이 미숙한지 명확하게 알아야 그에 맞는 양육환경을 조성할 수 있습니다.\n키블은 근거 중심으로 아이들의 성장/발달을 다방면으로 분석하고, 아이들에게 최적화된 치료 프로그램을 계획합니다.`}</div>

        <div className="px-9 mt-8 flex justify-between">
          <div className="flex rounded-3xl border-neutral-30 border h-80 w-full bg-[#F5F1EF]">
            <div className="flex-1 flex items-center justify-center bg-white">
              <CheckList className="w-44 h-52" />
            </div>
            <div className="triangle-right"></div>
            <div className="flex-1 flex items-center justify-center">
              <CheckList className="w-44 h-52" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-9 bg-neutral-10">
        <div className="text-center label5 text-neutral-50">Consultation and treatment</div>
        <div className="text-center h4 mt-2 mb-16">키블만의 상담 및 치료 시스템 절차</div>

        <div className="flex flex-col gap-y-16">
          <ProgramCard
            icon={<Call />}
            step={"step1"}
            title={"상담 신청"}
            content={
              "유선 전화 혹은 홈페이지, 카카오톡 채널을 통해 상담을 신청해주세요. 아이의 주호소 증상에 대해 이야기를 나눈 후, 심층 상담 일정 예약을 도와드립니다. 이때, 치료 목표와 구체화하기 위한 사전 설문 작성을 함께 요청드립니다."
            }
            emphasisWord={"사전 설문 작성"}
          />
          <ProgramCard
            icon={<Chat />}
            step={"step2"}
            title={"심층 상담"}
            content={
              "심층 상담을 통해 아동의 발달 현황을 점검하고, 목표를 설정하며 향후 수업 프로그램을 계획합니다. 심층 상담을 통해 아이에게 필요한 치료에 대해 종합적으로 판단하게 되고, 필요 시 체험 수업으로 연계됩니다."
            }
            emphasisWord={"발달 현황을 점검"}
          />
          <ProgramCard
            icon={<DateIcon />}
            step={"step3"}
            title={"체험 수업"}
            content={
              "치료사가 아이에 대해 더 정확하게 파악하고, 또 아이도 치료사와 얼마나 잘 맞는지 확인할 수 있는 체험 세션입니다. 40분간 세션을 진행하면서 치료사는 자체 도구를 활용하여 검사를 진행하고, 향후 치료 목표를 구체화합니다. 사전 설문, 심층 상담, 체험 수업 내용을 종합적으로 판단하여 양육자와 상담을 진행하며, 이후 프로그램 등록 여부를 결정합니다."
            }
            emphasisWord={"검사를 진행하고, 향후 치료 목표를 구체화"}
          />
          <ProgramCard
            icon={<Clipboard />}
            step={"step4"}
            title={"수업 및 코칭"}
            content={
              "프로그램 등록이 결정되면, 아동별 맞춤 구성으로 정기 수업을 진행합니다. 매회기 종료 후 담당 치료사와 1:1 상담을 진행합니다. 수업 시 아동 반응과 특이사항에 대해 공유하고, 가정에서 양육 방법에 대해 전달합니다. 월 1회마다 치료 과정과 목표를 점검하고, 치료 방향을 재논의합니다."
            }
            emphasisWord={"아동별 맞춤 구성"}
          />
        </div>
      </div>
    </div>
  );
}
