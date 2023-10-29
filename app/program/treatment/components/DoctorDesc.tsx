import { DoctorWoman } from "@/assets/svg";
import React from "react";

interface Props {
  items: { text: string; bold: string }[];
}
export default function DoctorDesc({ items }: Props) {
  return (
    <div className="bg-neutral-10">
      <div className="max-w-5xl px-4 py-10 md:px-9 md:py-16 mx-auto">
        <div className="mb-10 h4">이런 아이들에게 필요해요</div>
        <div className="md:flex items-center">
          <div className="">
            <DoctorWoman />
          </div>
          <div className="mt-10 md:mt-0 md:ml-10 w-full">
            <div className="flex flex-col gap-y-3">
              {items.map((item, index) => {
                const parts = item.text.split(item.bold);
                const coloredText = parts.map((part, index) => {
                  return (
                    <span className="body1" key={index}>
                      {part}
                      {index < parts.length - 1 && <span className="h7">{item.bold}</span>}
                    </span>
                  );
                });

                return (
                  <div className="rounded-2xl bg-white flex px-4 py-3 items-center" key={index}>
                    <div className="bg-primary-20 rounded-lg text-primary-70 mr-3 w-8 h-8 flex items-center justify-center">
                      {index + 1}
                    </div>
                    {coloredText}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
