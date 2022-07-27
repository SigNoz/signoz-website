import Button from "components/Button";
import Subtext from "components/SubText";
import Title from "components/Title";
import React, { useCallback } from "react";
import VideoPlayer from "components/VideoPlayer";
import { useIsDesktop } from "hooks/useDeviceType";
import { bookDemoLink } from "./util";

const HeroSection = (): JSX.Element => {
  const isDesktop = useIsDesktop();

  const PlayIconHeightController = isDesktop ? "72px" : "30px";

  const onBookDemoHandler = useCallback(() => {
    window.open(bookDemoLink);
  }, []);

  return (
    <div className="bg-[url('/images/bglines.png')] bg-no-repeat bg-contain">
      <div
        className="flex flex-col text-center justify-center md:w-[42.75rem] md:m-auto"
        style={{
          backgroundPosition: "center",
        }}
      >
        <Title className="text-2xl md:text-5xl">
          Much more than an application monitoring tool
        </Title>
        <Subtext className="mt-4">
          Understand the performance of your applications and identify any
          potential problems before your users
        </Subtext>
        <div className="flex flex-col md:flex-row md:w-[25rem] md:m-auto md:mt-8">
          <Button className="mt-8 md:mt-0 md:mr-6" fullWidth variant="primary">
            Get started for free
          </Button>
          <Button
            className="mt-4 md:mt-0 mb-8 md:mb-0"
            fullWidth
            variant="secondary"
            onClick={onBookDemoHandler}
          >
            Book a demo
          </Button>
        </div>
      </div>
      <div className="h-52 w-full md:h-[31rem] md:w-[57.5rem] md:m-auto rounded-lg overflow-hidden md:mt-12">
        <VideoPlayer
          thumbnail="https://i.ytimg.com/vi_webp/J1Bof55DOb4/maxresdefault.webp"
          PlayerIcon="/images/Play.png"
          VideoUrl="https://www.youtube.com/watch?v=J1Bof55DOb4"
          palyIconHeight={PlayIconHeightController}
          playIconWidth={PlayIconHeightController}
        />
      </div>
    </div>
  );
};

export default HeroSection;
