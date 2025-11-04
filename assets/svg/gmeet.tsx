import React from "react";

interface CustomIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
  fillRect?: string;
  fillPoly1?: string;
  fillPath1?: string;
  fillPath2?: string;
  fillPath3?: string;
  fillPoly2?: string;
  fillPoly3?: string;
  fillPath4?: string;
}

const GoogleMeetIcon: React.FC<CustomIconProps> = ({
  width = 48,
  height = 48,
  className,
  style,
  fillRect = "#fff",
  fillPoly1 = "#1e88e5",
  fillPath1 = "#4caf50",
  fillPath2 = "#fbc02d",
  fillPath3 = "#1565c0",
  fillPoly2 = "#e53935",
  fillPoly3 = "#2e7d32",
  fillPath4 = "#4caf50",
  ...rest
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 48 48"
    className={className}
    style={style}
    {...rest}
  >
    <rect width="16" height="16" x="12" y="16" fill={fillRect} transform="rotate(-90 20 24)" />
    <polygon fill={fillPoly1} points="3,17 3,31 8,32 13,31 13,17 8,16" />
    <path fill={fillPath1} d="M37,24v14c0,1.657-1.343,3-3,3H13l-1-5l1-5h14v-7l5-1L37,24z" />
    <path fill={fillPath2} d="M37,10v14H27v-7H13l-1-5l1-5h21C35.657,7,37,8.343,37,10z" />
    <path fill={fillPath3} d="M13,31v10H6c-1.657,0-3-1.343-3-3v-7H13z" />
    <polygon fill={fillPoly2} points="13,7 13,17 3,17" />
    <polygon fill={fillPoly3} points="38,24 37,32.45 27,24 37,15.55" />
    <path fill={fillPath4} d="M46,10.11v27.78c0,0.84-0.98,1.31-1.63,0.78L37,32.45v-16.9l7.37-6.22C45.02,8.8,46,9.27,46,10.11z" />
  </svg>
);

export default GoogleMeetIcon;
