import Card from "components/Card";
import { TitleProps } from "components/Title";
import ToolTipPollygon from "components/TooltipPolygon";
import cx from "classnames";
import React from "react";

const Content = ({ children, className }: ContentProps) => {
  return (
    <Card className={cx("relative", className)}>
      <div className="text-center font-semibold md:text-xl font-openSans">
        {children}
      </div>
      <ToolTipPollygon />
    </Card>
  );
};

interface ContentProps {
  children: React.ReactNode;
  className?: string;
}

export default Content;
