import React from "react";

export default function InspectionList({ items }: { items: string[] }) {
  return (
    <div className="bg-neutral-10">
      <div className="max-w-5xl px-4 py-10 md:px-9 md:py-16 mx-auto">
        <div className="mb-10 h4">검사 프로그램 종류</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, index) => {
            return (
              <div className="rounded-2xl bg-white flex px-4 py-3 items-center" key={index}>
                <div className="bg-primary-20 rounded-lg text-primary-70 mr-3 w-8 h-8 flex items-center justify-center">{index + 1}</div>
                <div className="h7">{item}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
