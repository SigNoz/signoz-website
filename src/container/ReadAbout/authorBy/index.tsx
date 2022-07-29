import React from "react";
import NextImage from "next/image";
import Subtext from "components/SubText";

const AuthorBy = (): JSX.Element => {
  return (
    <div className="flex gap-2 mt-6">
      <NextImage
        src={"/images/authors/user1.jpg"}
        layout="intrinsic"
        width={48}
        height={48}
        className="rounded-full"
      />
      <div>
        <div className="text-signoz-medium font-semibold text-base">
          Pawan Bhadauria
        </div>
        <Subtext className="font-light">VP - Engineering, Outplay</Subtext>
      </div>
    </div>
  );
};

export default AuthorBy;
