import Image from "next/image";
import React from "react";
import doctor1 from "@/assets/images/doctor1.png";

interface ExpertCardProps {
  name: string;
  position: string;
  carrer: string;
  eduCarrer: string;
  certify: string;
}

export default function ExpertCard({ carrer, certify, eduCarrer, name, position }: ExpertCardProps) {
  return (
    <div className="w-full">
      <div className="relative aspect-[5/6] rounded-lg overflow-hidden">
        <Image src={doctor1} alt={""} fill />
      </div>
      <div className="flex flex-col mt-4 gap-y-4">
        <div className="flex gap-x-3 items-center">
          <div className="h5">{name}</div>
          <div className="label6">{position}</div>
        </div>
        <div className="w-full h-[1px] bg-neutral-30" />
        <div className="text-neutral-60">
          <div className="label6">경력</div>
          <div className="body3 mt-1">{carrer}</div>
        </div>
        <div className="text-neutral-60">
          <div className="label6">학력</div>
          <div className="body3 mt-1">{eduCarrer}</div>
        </div>
        <div className="text-neutral-60">
          <div className="label6">자격/연구</div>
          <div className="body3 mt-1">{certify}</div>
        </div>
      </div>
    </div>
  );
}
