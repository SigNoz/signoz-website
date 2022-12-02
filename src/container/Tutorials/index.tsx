import React, { useEffect } from "react";
import Title from "components/Title";
import Subtext from "components/SubText";
import Card from "components/Card";
import NextImage from "next/image";
import Button from "components/Button";

const Tutorials = (): JSX.Element => {
  const CardDetails: CardDetailsProps[] = [
    {
      cardTitle: "Spring Boot JVM Metrics",
      subtext:
        "This tutorial shows you how you can visualise JVM metrics from Spring Boot applications in SigNoz.",
    },
    {
      cardTitle: "Spring Boot JVM Metrics",
      subtext:
        "This tutorial shows you how you can visualise JVM metrics from Spring Boot applications in SigNoz.",
    },
    {
      cardTitle: "Spring Boot JVM Metrics",
      subtext:
        "This tutorial shows you how you can visualise JVM metrics from Spring Boot applications in SigNoz.",
    },
  ];

  return (
    <div className="flex flex-col md:justify-center md:items-center">
      <div className="flex flex-col text-center">
        <Title>Tutorials</Title>
        <Subtext className="text-signoz-pure font-light mt-4 md:max-w-[684px]">
          SigNoz tutorials are step-by-step training exercises that guide you
          through monitoring your applications and infrastructure.
        </Subtext>
      </div>
      <div className="flex w-full gap-2 md:gap-6 overflow-x-scroll md:justify-center">
        {CardDetails.map((cardDetail: CardDetailsProps, index: number) => {
          return (
            <Card
              className="p-0 mt-6 min-w-[343px] md:w-[369px]"
              key={cardDetail.cardTitle + index}
            >
              <div className="bg-signoz-light-pink py-4 flex items-center justify-center rounded-top1">
                <NextImage
                  src={"/img/tutorials.png"}
                  alt="tutorials"
                  layout="intrinsic"
                  width={192}
                  height={103}
                />
              </div>
              <div className="px-4 pt-4 min-h-[116px]">
                <div className="text-base font-semibold tracking-lightTigher">
                  Spring Boot JVM Metrics
                </div>
                <div className="text-xs text-signoz-dark-intermediate font-light mt-1">
                  This tutorial shows you how you can visualise JVM metrics from
                  Spring Boot applications in SigNoz.
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      <Button fullWidth variant="secondary" className="mt-8 md:w-48">
        Access all tutorials
      </Button>
    </div>
  );
};

interface CardDetailsProps {
  cardTitle: string;
  subtext: string;
}

export default Tutorials;
