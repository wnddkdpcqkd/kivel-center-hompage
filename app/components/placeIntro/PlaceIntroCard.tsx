/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import React from "react";

const PlaceIntroCard = ({ data, dataIndex }: { data: { img: any }[]; dataIndex: number }) => {
  const { img } = data[dataIndex];
  return (
    <div className="w-72 h-48 overflow-hidden rounded-2xl relative lg:w-[800px] lg:h-[534px] pointer-events-none">
      <Image src={img} alt={""} fill />
    </div>
  );
};

export default React.memo(PlaceIntroCard);
