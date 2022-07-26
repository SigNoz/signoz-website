import React from "react";
import Subtext from "components/SubText";
import NextImage from "next/image";

const TrustedTeams = (): JSX.Element => {
  const imagesSrc = [
    {
      src: "/images/trusted-teams/cafe24.png",
      alt: "Cafe24",
    },
    {
      src: "/images/trusted-teams/fi.png",
      alt: "Cafe24",
    },
    {
      src: "/images/trusted-teams/naver.png",
      alt: "Cafe24",
    },
    {
      src: "/images/trusted-teams/outplay.png",
      alt: "Cafe24",
    },
    {
      src: "/images/trusted-teams/cafe24.png",
      alt: "Cafe24",
    },
  ];

  return (
    <div>
      <Subtext>Trusted by teams at</Subtext>
      <div>
        {imagesSrc.map((image, index) => (
          <div key={index}>
            <NextImage
              src={image.src}
              alt={image.alt}
              key={image.alt}
              layout="intrinsic"
              width={50}
              height={50}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedTeams;
