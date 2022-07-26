import Card from "components/Card";
import Title, { TitleProps } from "components/Title";
import ToolTipPollygon from "components/TooltipPolygon";

const Content = ({ children }: ContentProps) => {
  return (
    <Card className="relative">
      <Title
        style={{
          fontWeight: 600,
        }}
        className="text-center font-openSans"
      >
        {children}
      </Title>
      <ToolTipPollygon />
    </Card>
  );
};

interface ContentProps {
  children: TitleProps["children"];
}

export default Content;
