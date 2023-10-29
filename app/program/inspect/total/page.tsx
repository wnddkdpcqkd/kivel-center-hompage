import ImageDesc from "../../../components/ImageDesc";
import InspectionList from "../components/InspectionList";
import image from "./image.png";
export default function page() {
  return (
    <div className="">
      <ImageDesc image={image} buttonLabel={"언어치료 상담 신청"} buttonUrl={""} treatment={""} content={""} />
      <InspectionList items={items} />
    </div>
  );
}

const items = ["덴버 발달검사(DDST)", "한국형 베일리 영유아 검사", "아동 발달 검사(K-CDI)", "시각 운동 통합 발달검사(VMI)"];
