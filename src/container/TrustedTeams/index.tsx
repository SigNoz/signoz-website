import React from "react";
import Subtext from "components/SubText";
import NextImage from "next/image";
import Card from "components/Card";
import { imagesSrc } from "./trusted.config";

const TrustedTeams = (): JSX.Element => (
  <div className="md:max-w-[1156px] m-auto w-full">
    <Subtext className="font-light text-center mb-4">
      Trusted by teams at
    </Subtext>
    <Card className="w-[95%] m-auto shadow-1 mb-10">
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
              placeholder="empty"
              loading="lazy"
              blurDataURL={image.src}
            />
          </div>
        ))}
      </div>
    </Card>
  </div>
)

export default TrustedTeams;
