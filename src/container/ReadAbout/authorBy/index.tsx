import React from "react";
import NextImage from "next/image";
import Title from "components/Title";
import Subtext from "components/SubText";

const AuthorBy = (): JSX.Element => {
  return (
    <div className="flex gap-2 mt-6">
      <NextImage
        src={"/images/authors/user1.jpg"}
        layout="intrinsic"
        width={48}
        height={48}
      />
      <div>
        <Title>Pawan Bhadauria</Title>
        <Subtext>VP - Engineering, Outplay</Subtext>
      </div>
    </div>
  );
};

export default AuthorBy;
