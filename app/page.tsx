import { Logo2 } from "@/assets/svg";
import OperationGuideSection from "./components/OperationGuide/OperationGuideSection";
import CenterProgramSection from "./components/centerProgram/CenterProgramSection";
import ExpertIntroSection from "./components/expertIntro/ExpertIntroSection";
import HowToComeSection from "./components/howToCome/HowToComeSection";
import PlaceIntroSection from "./components/placeIntro/PlaceIntroSection";
import ReviewSection from "./components/review/ReviewSection";
export default function Home() {
  return (
    <div>
      {/* Header */}

      {/* Image */}
      <div className="w-full h-[576px] relative mx-auto bg-mainImage bg-no-repeat bg-cover bg-center pt-32 px-4 md:px-9">
        {/* <Image src={MainImage} alt={""} fill className="absolute" /> */}
        <div className="label3">{`아이들의 건강한 발달을 위해\n섬세한 치료 경험을 제공하는`}</div>
        <div className="flex items-center mt-4">
          <Logo2 />
        </div>
      </div>

      {/* 키블 센터의 프로그램 */}
      <CenterProgramSection />
      {/* 전문가소개 */}
      <ExpertIntroSection />
      {/* 공간소개 */}
      <PlaceIntroSection />
      {/* 후기 */}
      <ReviewSection />
      {/* 오시는길 */}
      <HowToComeSection />
      {/* 운영안내 */}
      <OperationGuideSection />
      {/* footer */}
    </div>
  );
}
