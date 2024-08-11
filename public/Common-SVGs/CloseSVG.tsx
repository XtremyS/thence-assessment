import React from "react";
interface CloseSVGProp {
  className?: string;
  iconWidth: string;
  iconHeight: string;
}
const CloseSVG: React.FC<CloseSVGProp> = ({
  className,
  iconWidth,
  iconHeight,
}) => {
  return (
    <svg
      className={className}
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_11_216)">
        <path
          d="M24 8L8 24"
          stroke="#0C1319"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 8L24 24"
          stroke="#0C1319"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_11_216">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CloseSVG;
