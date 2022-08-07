import cx from "classnames";
import React from "react";

const Card = ({
  children,
  className,
  refernce,
  id,
  style,
}: CardProps): JSX.Element => {
  return (
    <div
      id={id}
      className={cx("p-4 bg-white rounded-lg shadow-1", className)}
      ref={refernce}
      style={style}
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
}

export default Card;
