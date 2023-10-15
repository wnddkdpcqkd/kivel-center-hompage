"use client";
import React, { useEffect, useState } from "react";
import { ResponsiveContainer, StackedCarousel } from "react-stacked-center-carousel";
import { Pagination } from "@/components/Pagination";
import room from "@/assets/images/room.png";
import PlaceIntroCard from "@/app/components/placeIntro/PlaceIntroCard";
export default function SpaceCarousel() {
  const [centerIndex, setCenterIndex] = useState<number>(0);
  const ref = React.useRef<StackedCarousel>();

  const data = [
    {
      img: room,
      title: "작업치료실",
      intro: "키블의 검증된 전문가가 아동을 종합적으로 파악하고 개별 맞춤 치료 계획을 수립합니다.",
    },
    {
      img: room,
      title: "얼굴치료실",
      intro: "키블의 검증된 전문가가 아동을 종합적으로 파악하고 개별 맞춤 치료 계획을 수립합니다.",
    },
    {
      img: room,
      title: "인성치료실",
      intro: "키블의 검증된 전문가가 아동을 종합적으로 파악하고 개별 맞춤 치료 계획을 수립합니다.",
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-[375px] lg:max-w-[800px] mx-auto">
        <div className="text-center h6 md:h5">{data[centerIndex].title}</div>
        <div className="text-center body2 mt-2 lg:mt-4">{data[centerIndex].intro}</div>
      </div>

      <div className="max-w-[375px] lg:max-w-5xl mx-auto w-full py-6">
        <div className="mx-auto lg:w-full lg:px-9 px-6">
          <ResponsiveContainer
            carouselRef={ref}
            render={(width, carouselRef) => {
              const itemWidth = width < 900 ? 280 : 800;
              return (
                <StackedCarousel
                  ref={carouselRef}
                  slideComponent={PlaceIntroCard}
                  slideWidth={itemWidth}
                  carouselWidth={width}
                  data={data}
                  onActiveSlideChange={setCenterIndex}
                  maxVisibleSlide={3}
                  fadeDistance={0}
                  customScales={[1, 0.78, 0.1]}
                  transitionTime={450}
                  disableSwipe
                />
              );
            }}
          />
        </div>
      </div>
      <Pagination length={data.length} index={centerIndex} />
    </div>
  );
}
