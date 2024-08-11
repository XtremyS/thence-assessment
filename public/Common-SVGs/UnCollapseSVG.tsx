import React from "react";
interface UnCollapseSVGProp {
  className?: string;
  iconWidth: string;
  iconHeight: string;
}
const UnCollapseSVG: React.FC<UnCollapseSVGProp> = ({
  className,
  iconWidth,
  iconHeight,
}) => {
  return (
    <svg
      className={className}
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 14 2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0V2H14V0H0Z" />
    </svg>
  );
};

export default UnCollapseSVG;
