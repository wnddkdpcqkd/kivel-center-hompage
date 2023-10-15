import ExpertCard from "@/app/components/expertIntro/ExpertCard";

const experts = [
  {
    name: "신지원",
    position: "센터원장",
    carrer: "현) 일산 M 의원 사회성발달클리닉 부원장",
    eduCarrer: "가톨릭대학교 의과대학 졸업\n서호주대학교 학사 (신경과학 전공)",
    certify: "자폐성 장애의 유전적 요인에 대한 연구(Harry Perkins Institute of Medical Research, 2017)",
  },
  {
    name: "신지원",
    position: "센터원장",
    carrer: "현) 일산 M 의원 사회성발달클리닉 부원장",
    eduCarrer: "가톨릭대학교 의과대학 졸업\n서호주대학교 학사 (신경과학 전공)",
    certify: "자폐성 장애의 유전적 요인에 대한 연구(Harry Perkins Institute of Medical Research, 2017)",
  },
  {
    name: "신지원",
    position: "센터원장",
    carrer: "현) 일산 M 의원 사회성발달클리닉 부원장",
    eduCarrer: "가톨릭대학교 의과대학 졸업\n서호주대학교 학사 (신경과학 전공)",
    certify: "자폐성 장애의 유전적 요인에 대한 연구(Harry Perkins Institute of Medical Research, 2017)",
  },
  {
    name: "신지원",
    position: "센터원장",
    carrer: "현) 일산 M 의원 사회성발달클리닉 부원장",
    eduCarrer: "가톨릭대학교 의과대학 졸업\n서호주대학교 학사 (신경과학 전공)",
    certify: "자폐성 장애의 유전적 요인에 대한 연구(Harry Perkins Institute of Medical Research, 2017)",
  },
  {
    name: "신지원",
    position: "센터원장",
    carrer: "현) 일산 M 의원 사회성발달클리닉 부원장",
    eduCarrer: "가톨릭대학교 의과대학 졸업\n서호주대학교 학사 (신경과학 전공)",
    certify: "자폐성 장애의 유전적 요인에 대한 연구(Harry Perkins Institute of Medical Research, 2017)",
  },
  {
    name: "신지원",
    position: "센터원장",
    carrer: "현) 일산 M 의원 사회성발달클리닉 부원장",
    eduCarrer: "가톨릭대학교 의과대학 졸업\n서호주대학교 학사 (신경과학 전공)",
    certify: "자폐성 장애의 유전적 요인에 대한 연구(Harry Perkins Institute of Medical Research, 2017)",
  },
];
export default function page() {
  return (
    <div>
      <div className="bg-[#F4EEEC]">
        <div className="relative md:flex max-w-7xl mx-auto">
          <div className="absolute h-full w-full center-expert-gradient z-10"></div>
          <div className="px-4 pt-10 z-20 relative bg-transparent md:w-1/2 md:pt-20">
            <div className="text-neutral-40 label6">Kivel’s objective</div>
            <div className="h5 mt-2">키블센터의 목표</div>
            <div className="mt-8 body1">{`모든 아이들이 행복하게 성장할 수 있도록\n오늘도 더 나은 방법을 깊게 고민합니다.`}</div>
          </div>

          <div className="md:w-1/2 w-full h-[450px] md:h-[376px] bg-[url('../assets/images/centerExpert.png')] bg-no-repeat bg-cover bg-center md:px-9" />
        </div>
      </div>
      <div className="bg-white py-14 md:py-20 flex flex-wrap items-center justify-center gap-y-14 gap-x-4 md:gap-y-20 md:gap-x-16 px-10 md:px-0 max-w-[860px] mx-auto">
        {experts.map((item, index) => {
          return (
            <div key={index} className="max-w-[300px] md:w-60">
              <ExpertCard {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
