import React from "react";
interface CollapseSVGProp {
  className?: string;
  iconWidth: string;
  iconHeight: string;
}
const CollapseSVG: React.FC<CollapseSVGProp> = ({
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
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" />
    </svg>
  );
};

export default CollapseSVG;
