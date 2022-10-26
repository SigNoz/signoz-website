import React from "react";
import Content from "./Content";
import Image from "next/image";
import Title from "components/Title";
import getIcons from "asset/icons";
import { useIsDesktop } from "hooks/useDeviceType";

const Feedback = (): JSX.Element => {
  const isDesktop = useIsDesktop();

  return (
    <div
      style={{
        backgroundPositionX: isDesktop ? "20%" : "10%",
        backgroundPositionY: isDesktop ? "0%" : "10%",
      }}
      className="p-4 bg-signoz-light bg-[url('/images/QuotationMark.png')] bg-no-repeat md:bg-[length:10rem] bg-[length:8rem] bg-left-1"
    >
      <div className="md:max-w-2xl md:m-auto">
        <Content>
          <span>
            A new and yet powerful
            <span className="text-signoz-primary">
              &nbsp;#observability #opensource&nbsp;
            </span>
            alternative has born in the name of SigNoz. It could offer a serious
            challenger to Datadog / New Relic and other SaaS solutions.
          </span>
        </Content>
        <div className="flex flex-col justify-center items-center mt-6">
          <Image
            src={"/images/authors/ankit_anand.webp"}
            alt="author image"
            objectFit="contain"
            layout="fixed"
            width={64}
            height={64}
          />
          <Title className="text-signoz-primary-light mt-2">
            Rachid Zarouali
          </Title>
          <div className="text-signoz-dark-intermediate text-sm md:text-base">
            Docker Captain, Microsoft Azure MVP
          </div>
          <div className="mt-2">{getIcons("linkedin")}</div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
