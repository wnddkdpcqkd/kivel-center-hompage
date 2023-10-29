import DoctorDesc from "../components/DoctorDesc";
import ImageDesc from "../../../components/ImageDesc";
import image from "./image.png";
export default function page() {
  return (
    <div className="">
      <ImageDesc image={image} buttonLabel={"언어치료 상담 신청"} buttonUrl={""} treatment={""} content={""} />
      <DoctorDesc items={languageItem} />
    </div>
  );
}

const languageItem = [
  {
    text: "또래에 비해 표현언어와 수용언어 발달이 늦어요",
    bold: "또래에 비해 표현언어와 수용언어 발달이 늦어요",
  },
  {
    text: "사회적 상황에 맞지 않은 말을 해요",
    bold: "사회적 상황",
  },
  {
    text: "발음이 부정확하고  내용 전달이 어려워요",
    bold: "발음",
  },
  {
    text: "접속사, 지시어를 어색하게 사용해요",
    bold: "접속사, 지시어",
  },
  {
    text: "말을 더듬어요",
    bold: "더듬어요",
  },
  {
    text: "읽기, 쓰기가 어려워요",
    bold: "읽기, 쓰기",
  },
  {
    text: "대화의 주제를 유지하지 못하고 주고받기 힘들어해요",
    bold: "주고받기 힘들어해요",
  },
];
