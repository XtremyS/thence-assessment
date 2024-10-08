import React from "react";
interface AlertSVGProps {
  className?: string;
  iconWidth: string;
  iconHeight: string;
}
const AlertSVG: React.FC<AlertSVGProps> = ({
  className,
  iconWidth,
  iconHeight,
}) => {
  return (
    <svg
      className={className}
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 15 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.50162 13.6666C3.81973 13.6666 0.834961 10.6818 0.834961 6.99992C0.834961 3.31802 3.81973 0.333252 7.50162 0.333252C11.1835 0.333252 14.1683 3.31802 14.1683 6.99992C14.1683 10.6818 11.1835 13.6666 7.50162 13.6666ZM6.83496 8.99992V10.3332H8.16829V8.99992H6.83496ZM6.83496 3.66658V7.66658H8.16829V3.66658H6.83496Z" />
    </svg>
  );
};

export default AlertSVG;
