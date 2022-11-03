import React from "react";
import { headingConfig } from "./config";
import { useIsDesktop } from "hooks/useDeviceType";

const Header = ({ type, children, id }: HeaderProps) => {
  const isDesktop = useIsDesktop();
  const Component = type;

  return (
    <Component
      id={id}
      className="font-semibold font-WorkSans text-signoz-medium my-3"
      style={{
        fontSize: isDesktop
          ? headingConfig[type].desktop
          : headingConfig[type].mobile,
      }}
    >
      {children}
    </Component>
  );
};

interface HeaderProps {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  id?: string;
}

export default Header;
