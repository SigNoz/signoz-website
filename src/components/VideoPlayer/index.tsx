import React from "react";
import NextImage from "next/image";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const VideoPlayer = ({
  PlayerIcon,
  VideoUrl,
  palyIconHeight,
  playIconWidth,
  thumbnail,
}: VideoPlayerProps) => {
  return (
    <ReactPlayer
      width="100%"
      height="100%"
      url={VideoUrl}
      light={thumbnail}
      playing={true}
      playIcon={
        <div className="flex flex-col items-center">
          <NextImage
            width={playIconWidth}
            height={palyIconHeight}
            layout="intrinsic"
            loading="lazy"
            src={PlayerIcon}
            alt="Play"
          />
          <div className="text-white text-sm md:text-2xl font-light mt-[0.7rem]">
            See SigNoz in action
          </div>
        </div>
      }
    />
  );
};

interface VideoPlayerProps {
  thumbnail?: string;
  VideoUrl: string;
  PlayerIcon: string;
  playIconWidth: string;
  palyIconHeight: string;
}

export default VideoPlayer;
