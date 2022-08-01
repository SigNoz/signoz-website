import React from "react";
import NextImage from "next/image";
import cx from "classnames";

const AuthorBy = ({
  avatar,
  name,
  position,
  className,
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
        <div className="text-signoz-medium font-semibold text-base">{name}</div>
        <div className="text-signoz-dark-intermediate text-xs mt-1 font-light">
          {position}
        </div>
      </div>
    </div>
  );
};

interface AuthorProps {
  name: string;
  avatar: string;
  position: string;
  className?: string;
}

export default AuthorBy;
