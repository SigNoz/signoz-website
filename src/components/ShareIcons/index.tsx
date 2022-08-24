import getIcons from "asset/icons";
import React from "react";

const ShareIcons = ({ shareIcons }: SharedIconProps): JSX.Element => {
  return (
    <div className="p-4 md:p-0">
      <div className="text-base text-signoz-dark-light">Share this article</div>
      <div className="flex items-center gap-4 mt-2">
        {shareIcons.map((shareIcon) => {
          const { type } = shareIcon;
          return (
            <div
              key={shareIcon.type}
              className="border w-12 h-12 flex flex-col items-center justify-center border-signoz-medium rounded-lg cursor-pointer"
            >
              {getIcons(type, "#132742")}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export interface ShareIcon {
  type: "facebook" | "twitter" | "linkedin";
  url: string;
}

interface SharedIconProps {
  shareIcons: ShareIcon[];
}

export default ShareIcons;
