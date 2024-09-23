import React from "react";

interface LogoProps {
  logo: string;
}

const Logo: React.FC<LogoProps> = ({ logo }) => {
  return <div className="text-3xl font-semibold">{logo}</div>;
};

export default Logo;
