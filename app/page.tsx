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
        <div className="h5">{`모든 아이들이\n행복하게 성장할 수 있는\n세상을 만들어나갑니다`}</div>
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
