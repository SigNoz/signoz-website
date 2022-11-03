import React from "react";
import NextImage from "next/image";
import cx from "classnames";

const AuthorBy = ({
  avatar,
  name,
  position,
  className,
  nameClassName,
  positionClassName,
}: AuthorProps): JSX.Element => {
  return (
    <div className={cx("flex gap-2", className)}>
      <NextImage
        src={avatar}
        layout="intrinsic"
        width={48}
        height={48}
        className="rounded-full"
      />
      <div>
        <div
          className={cx(
            "text-signoz-medium font-semibold text-base",
            nameClassName
          )}
        >
          {name}
        </div>
        <div
          className={cx(
            "text-signoz-dark-intermediate text-xs mt-1 font-light",
            positionClassName
          )}
        >
          {position}
        </div>
      </div>
    </div>
  );
};

export interface AuthorProps {
  name: string;
  avatar: string;
  position: string;
  className?: string;
  nameClassName?: string;
  positionClassName?: string;
}

export default AuthorBy;
