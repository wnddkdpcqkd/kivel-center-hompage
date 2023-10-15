import { Boy, Candidate, CenterObject1, CenterObject2, List, Toys } from "@/assets/svg";
import React from "react";
import CenterSolution from "./components/CenterSolution";
import CenterObjectCard from "./components/CenterObjectCard";

export default function page() {
  return (
    <div>
      <div className="w-full h-[576px] relative mx-auto max-w-7xl bg-[url('../assets/images/centerImage.png')] bg-no-repeat bg-cover bg-center pt-24 px-4 md:px-9">
        {/* <Image src={MainImage} alt={""} fill className="absolute" /> */}
        <div className="h5">{`아이들의 건강한 발달을 위해\n섬세한 치료 경험을 제공합니다.`}</div>
      </div>

      <div className="py-14 md:py-20">
        <div className="text-neutral-40 label6 text-center">Kivel’s objective</div>
        <div className="h5 text-center mt-2">키블센터의 목표</div>
        <div className="px-4 mt-10 flex flex-col gap-y-10 md:flex-row md:gap-x-8 justify-center ">
          <CenterObjectCard
            tag={["운동 기술", "사회적 기술", " 언어&의사소통", "인지/학습 기술", " 일상생활 기술", "행동/심리 관리"]}
            title="진단 - 치료 - 교육, 그리고 주도적인 삶"
            content="단순히 목표활동 달성만이 아닌, 모든 영역에서 건강한 발달을 이뤄낼 수 있도록 통합적인 치료 환경을 제공합니다."
            icon={<CenterObject1 className="w-[250px] h-[145px]" />}
          />

          <CenterObjectCard
            tag={["양육 스트레스 해소", "양육 효능감 극대화", " 일상생활 중심 개입", " 양육연계 프로그램"]}
            title="부모와 아이가 함께 성장하는 방법"
            content="치료사와 양육자가 한 팀이 되어 아이들의 잠재력을 이끌어낼 수 있도록 양육자의 편에서 멘토가 되어줍니다."
            icon={<CenterObject2 className="w-[250px] h-[145px]" />}
          />
        </div>
      </div>

      <div className="bg-neutral-10 py-8 px-4 md:py-16 md:px-9">
        <div className="text-neutral-40 label6 text-center">Kivel’s solution</div>
        <div className="h5 text-center mt-2">키블센터의 솔루션</div>

        <div className="flex flex-col gap-y-8 my-10 md:my-16 md:flex-row md:flex-wrap md:gap-14 max-w-screen-md mx-auto">
          <CenterSolution
            title={"검증된 전문가의 통합 케어"}
            content={"키블의 검증된 전문가가 아동을 종합적으로 파악하고 개별 맞춤 치료 계획을 수립합니다."}
            icon={<Boy />}
          />
          <CenterSolution
            title={"아동 주도의 치료환경"}
            content={
              "아이의 잠재력과 참여도를 끌어내는 다양한 프로그램을 준비하여 치료사와 아동이 최고의 합을 만들어 낼 수 있도록 노력합니다."
            }
            icon={<Boy />}
          />
          <CenterSolution
            title={"일상 중심의 목표 설정"}
            content={"치료실 환경이 아닌 가정과 일상 속에서도 아이가 건강하게 발달할 수 있는 환경을 조성합니다."}
            icon={<Toys />}
          />
          <CenterSolution
            title={"주기적인 목표 점검"}
            content={
              "다채롭게 성장하는 아이들에 맞추어 양육자 코칭과 주기적인 목표 점검을 진행하며, 치료방향을 지속적으로 함께 논의합니다."
            }
            icon={<List />}
          />
        </div>
      </div>
    </div>
  );
}
