import Card from "components/Card";
import { TitleProps } from "components/Title";
import ToolTipPollygon from "components/TooltipPolygon";

const Content = ({ children }: ContentProps) => {
  return (
    <Card className="relative">
      <div className="text-center font-semibold md:text-xl font-openSans">
        {children}
      </div>
      <ToolTipPollygon />
    </Card>
  );
};

interface ContentProps {
  children: TitleProps["children"];
}

export default Content;
