import getIcons from "asset/icons";

const ShareIcons = ({ shareIcons }: SharedIconProps): JSX.Element => (
  <div className="p-4 md:p-0">
    <div className="text-base text-signoz-dark-light">Share this article</div>
    <div className="flex items-center gap-4 mt-2 flex-wrap">
      {shareIcons.map((shareIcon) => {
        const { type, url } = shareIcon;
        return (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            key={shareIcon.type}
            className="border w-12 h-12 flex flex-col items-center justify-center border-signoz-medium rounded-lg cursor-pointer"
          >
            {getIcons(type, "#132742")}
          </a>
        );
      })}
    </div>
  </div>
);

export interface ShareIcon {
  type: "redit" | "twitter" | "linkedin";
  url: string;
}

interface SharedIconProps {
  shareIcons: ShareIcon[];
}

export default ShareIcons;
