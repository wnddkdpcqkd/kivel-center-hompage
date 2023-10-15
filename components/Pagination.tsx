interface PaginationProps {
  length: number;
  index: number;
}

export function Pagination({ length, index }: PaginationProps) {
  const paginationArr = [...Array(length)];
  return (
    <div className="flex gap-x-1.5 p-1 items-center justify-center">
      {paginationArr.map((item, idx) => {
        const backgroundColor = index == idx ? "bg-primary-70 w-6" : "bg-neutral-20 w-1.5";
        return <div key={idx} className={`${backgroundColor} transition-all h-1.5 rounded-full duration-300`} />;
      })}
    </div>
  );
}
