import React from "react";
interface AdditionSVGProp {
  className?: string;
  iconWidth: string;
  iconHeight: string;
}
const AdditionSVG: React.FC<AdditionSVGProp> = ({
  className,
  iconWidth,
  iconHeight,
}) => {
  return (
    <svg
      className={className}
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="black" />
    </svg>
  );
};

export default AdditionSVG;
