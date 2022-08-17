import cx from "classnames";
import React from "react";

const Card = ({
  children,
  className,
  refernce,
  id,
  style,
  onClick,
}: CardProps): JSX.Element => {
  return (
    <div
      id={id}
      className={cx("p-4 bg-white rounded-lg shadow-1", className)}
      ref={refernce}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

interface CardProps {
  children: React.ReactNode;
  className?: string;
  refernce?: React.Ref<HTMLDivElement>;
  id?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export default Card;
