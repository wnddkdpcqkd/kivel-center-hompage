interface ButtonProps {
  text: string;
  kind: "primary" | "outlined" | "ghost" | "lightSolid";
  leftIcon?: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  size: "small" | "medium" | "large";
  selected?: boolean;
  onClick?(): void;
}

export function Button({ leftIcon, onClick, kind, size, disabled, text = "Button", icon, selected = false }: ButtonProps) {
  return (
    <div
      onClick={onClick}
      aria-disabled={disabled}
      className={`${
        onClick && "cursor-pointer"
      } flex items-center gap-x-2 hover:cursor-pointer aria-disabled:pointer-events-none text-center justify-center aria-disabled:text-neutral-40
  
		  ${size == "large" ? "py-4 px-6 rounded-2xl" : size == "medium" ? "py-3 px-6 rounded-xl" : "py-2 px-4 rounded-xl"}
	  ${kind == "primary" && "aria-disabled:bg-neutral-10 bg-primary-70 hover:bg-primary-60 text-white"}
		  ${
        kind == "outlined" &&
        `bg-white  border-neutral-40 border ${selected ? "border-primary-70 text-primary-70" : "border-neutral-40 text-neutral-40"} 
		hover:bg-primary-10 hover:border-primary-70 hover:text-primary-70
		`
      } 
		  ${kind == "ghost" && "bg-white hover:bg-primary-10 aria-disabled:border-neutral-40"}
	  ${kind == "lightSolid" && "bg-neutral-10 hover:bg-neutral-20 text-neutral-60"}
	  `}
    >
      {leftIcon}
      <div className="flex-grow">{text}</div>
      {icon}
    </div>
  );
}
