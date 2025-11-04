import React from "react";

interface CustomIconProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  // Optionally add fill overrides for each path
  fill1?: string;
  fill2?: string;
  fill3?: string;
  fill4?: string;
  fill5?: string;
}

const GmailColoredIcon: React.FC<CustomIconProps> = ({
  width = 48,
  height = 48,
  className,
  fill1 = "#4caf50",
  fill2 = "#1e88e5",
  fill3 = "#e53935",
  fill4 = "#c62828",
  fill5 = "#fbc02d",
  ...rest
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 48 48"
    className={className}
    {...rest}
  >
    <path fill={fill1} d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z" />
    <path fill={fill2} d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z" />
    <polygon fill={fill3} points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17" />
    <path fill={fill4} d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z" />
    <path fill={fill5} d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z" />
  </svg>
);

export default GmailColoredIcon;
