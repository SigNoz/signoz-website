import React from "react";
import Subtext from "components/SubText";
import NextImage from "next/image";
import Card from "components/Card";

const TrustedTeams = (): JSX.Element => {
  const imagesSrc = [
    {
      src: "/images/trusted-teams/cafe24.png",
      alt: "Cafe24",
      width: 64.8,
      height: 24,
    },
    {
      src: "/images/trusted-teams/naver.png",
      alt: "naver",
      width: 68,
      height: 12,
    },
    {
      src: "/images/trusted-teams/fi.png",
      alt: "fi",
      width: 24,
      height: 24,
    },
    {
      src: "/images/trusted-teams/turvo.png",
      alt: "turvo",
      width: 92.5,
      height: 24,
    },
    {
      src: "/images/trusted-teams/outplay.png",
      alt: "outplay",
      width: 105.68,
      height: 24,
    },
    {
      src: "/images/trusted-teams/cafe24.png",
      alt: "Cafe24",
      width: 64.8,
      height: 24,
    },
    {
      src: "/images/trusted-teams/fi.png",
      alt: "fi",
      width: 24,
      height: 24,
    },
    {
      src: "/images/trusted-teams/cafe24.png",
      alt: "Cafe24",
      width: 64.8,
      height: 24,
    },
    {
      src: "/images/trusted-teams/naver.png",
      alt: "naver",
      width: 68,
      height: 12,
    },
    {
      src: "/images/trusted-teams/fi.png",
      alt: "fi",
      width: 24,
      height: 24,
    },
    {
      src: "/images/trusted-teams/turvo.png",
      alt: "turvo",
      width: 92.5,
      height: 24,
    },
    {
      src: "/images/trusted-teams/naver.png",
      alt: "naver",
      width: 68,
      height: 12,
    },
  ];

  return (
    <div className="md:max-w-[1156px] m-auto w-full">
      <Subtext className="font-light text-center mb-4">
        Trusted by teams at
      </Subtext>
      <Card className="w-[95%] m-auto shadow-1">
        <div className="p-4 flex flex-wrap gap-8 md:gap-[50px] items-center justify-center md:py-9 md:px-14">
          {imagesSrc.map((image, index) => (
            <div key={index + image.alt}>
              <NextImage
                src={image.src}
                alt={image.alt}
                key={image.alt}
                layout="intrinsic"
                width={image.width}
                height={image.height}
              />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default TrustedTeams;
