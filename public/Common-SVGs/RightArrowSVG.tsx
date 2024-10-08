import React from "react";
interface RightArrowSVGProp {
  className?: string;
  iconWidth: string;
  iconHeight: string;
}
const RightArrowSVG: React.FC<RightArrowSVGProp> = ({
  className,
  iconWidth,
  iconHeight,
}) => {
  return (
    <svg
      className={className}
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.1716 6.9999L-5.92571e-07 6.9999L-7.67416e-07 8.9999L12.1716 8.9999L6.8076 14.3638L8.2218 15.778L16 7.9999L8.2218 0.221679L6.8076 1.63589L12.1716 6.9999Z" />
    </svg>
  );
};

export default RightArrowSVG;
