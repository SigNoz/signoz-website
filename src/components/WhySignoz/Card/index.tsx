import getIcons from "asset/icons";
import Card from "components/Card";
import cx from "classnames";
import React from "react";

const WhySignozCard = ({
  redText = "",
  normalText,
  className,
  refernce,
}: WhySignozCardProps) => {
  return (
    <Card
      refernce={refernce}
      className={cx("relative min-h-[135px]", className)}
    >
      <div className="absolute top-[-25%] left-0">
        {getIcons("whysignozcard")}
      </div>
      <div className="mt-10 font-openSans font-semibold text-sm">
        {redText.length > 0 && (
          <span className="text-signoz-primary">{redText}</span>
        )}
        {normalText.length > 0 && (
          <span className="text-signoz-dark-intermediate">{normalText}</span>
        )}
      </div>
    </Card>
  );
};
interface WhySignozCardProps {
  redText: string;
  normalText: string;
  className?: string;
  refernce?: React.Ref<HTMLDivElement>;
}

export default WhySignozCard;
