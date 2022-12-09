import React from "react";

const LI = ({ children, ...rest }: Props) => {
  return (
    <li
      className="font-openSans my-2 font-normal text-base leading-[160%] text-signoz-dark-intermediate"
      {...rest}
    >
      {children}
    </li>
  );
};

interface Props {
  children?: React.ReactNode;
}

export default LI;
