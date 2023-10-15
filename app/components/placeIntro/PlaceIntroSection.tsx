"use client";
import React, { useEffect, useState } from "react";
import { ResponsiveContainer, StackedCarousel } from "react-stacked-center-carousel";
import { Pagination } from "@/components/Pagination";
import PlaceIntroCard from "./PlaceIntroCard";
import room from "@/assets/images/room.png";
export default function PlaceIntroSection() {
  const [centerIndex, setCenterIndex] = useState<number>(0);
  const ref = React.useRef<StackedCarousel>();

  useEffect(() => {
    let intervalId: NodeJS.Timeout; // 타입 변경

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        ref.current?.goNext();
      }, 2000);
    };

    // dragstart 이벤트 리스너
    const handleDragStart = () => {
      clearInterval(intervalId); // 드래그 시작 시 인터벌 초기화
    };

    // dragend 이벤트 리스너
    const handleDragEnd = () => {
      startAutoScroll(); // 드래그 종료 후 인터벌 다시 시작
    };

    window.addEventListener("mousedown", handleDragStart); // dragstart 이벤트에 리스너 추가
    window.addEventListener("mouseup", handleDragEnd); // dragend 이벤트에 리스너 추가
    startAutoScroll(); // 첫 인터벌 시작

    return () => {
      clearInterval(intervalId); // 컴포넌트 unmount 시 인터벌 초기화
      window.removeEventListener("mousedown", handleDragStart); // dragstart 이벤트 리스너 제거
      window.removeEventListener("mouseup", handleDragEnd); // dragend 이벤트 리스너 제거
    };
  }, []);

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
    <div className="py-14 md:py-20 bg-white">
      <div className="text-neutral-40 label6 text-center">Space</div>
      <div className="h5 text-center mt-2 mb-10 md:mb-16">공간 소개</div>

      <div className="w-full">
        <div style={{ width: "320px" }} className="mx-auto w-80 lg:w-full">
          <ResponsiveContainer
            carouselRef={ref}
            render={(width, carouselRef) => {
              const itemWidth = 280;
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
                />
              );
            }}
          />
        </div>
      </div>

      <div className="w-72 mx-auto mt-6">
        <div className="text-center h6 md:h5">{data[centerIndex].title}</div>
        <div className="text-center body2 mt-2 lg:mt-4 mb-6">{data[centerIndex].intro}</div>
        <Pagination length={data.length} index={centerIndex} />
      </div>
    </div>
  );
}
