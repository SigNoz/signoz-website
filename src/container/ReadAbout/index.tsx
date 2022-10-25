import React from "react";
import NextImage from "next/image";
import Title from "components/Title";
import Subtext from "components/SubText";
import AuthorBy from "../../components/AuthorBy";
import Button from "components/Button";
import Card from "components/Card";

const OutPlay = (): JSX.Element => {
  return (
    <div className="rounded-lg md:flex md:justify-center">
      <div className="py-10 px-20 md:py-48 md:px-[5.2rem] md:min-w-[28rem] flex items-center justify-center bg-signoz-secondary-light">
        <NextImage
          src={"/images/readabout/outplay.png"}
          layout="intrinsic"
          width={176}
          height={40}
        />
      </div>
      <Card className="p-0">
        <div className="md:ml-16 ml-0 md:pt-8 md:pb-5 flex flex-col items-start px-4 pt-6 pb-6">
          <div>
            <Title className="text-2xl md:text-[2rem] md:font-bold text-signoz-medium md:max-w-[549px]">
              Read about how Outplay improved conversion rates by 10-20% with
              SigNoz.
            </Title>
            <div className="mt-4 text-signoz-dark-light font-light md:font-bold text-base md:text-xl pb-6 md:px-0 md:max-w-[612px]">
              <span>
                “A new and yet powerful
                <span className="text-signoz-primary">
                  &nbsp;#observability #opensource&nbsp;
                </span>
                alternative has born in the name of SigNoz. It could offer a
                serious challenger to Datadog / New Relic and other SaaS
                solutions.”
              </span>
            </div>
          </div>
          <AuthorBy
            position="VP - Engineering, Outplay"
            name="Pawan Bhadauria"
            avatar="/images/authors/ankit_anand.webp"
          />
          <Button className="mt-9 md:w-[12.6rem]" fullWidth variant="primary">
            Read full case study
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default OutPlay;
