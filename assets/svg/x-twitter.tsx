import React from "react";

type XIconProps = React.SVGProps<SVGSVGElement>;

export const XIcon: React.FC<XIconProps> = ({
  width = 50,
  height = 50,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width={width}
    height={height}
    viewBox="0 0 50 50"
    className={className}
    aria-label="X / Twitter"
    {...props}
  >
    {/* Black background */}
    <rect x="4" y="4" width="42" height="42" rx="7" fill="#000" />
    {/* The 'X' paths in white for contrast */}
    <path
      d="M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"
      fill="#fff"
    />
  </svg>
);

