import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

type Props = Parameters<typeof LiteYouTubeEmbed>[0];

const Youtube = ({ id, title, ...prop }: Props) => {
  return <LiteYouTubeEmbed id={id} title={title} {...prop} />;
};

export default Youtube;
