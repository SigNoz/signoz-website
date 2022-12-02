/* eslint-disable @next/next/no-img-element */
import getIcons from "asset/icons";
import AuthorBy from "components/AuthorBy";
import Card from "components/Card";
import cx from "classnames";
import React, { useState } from "react";

const FeedbackCard = (props: FeedbackCardProps): JSX.Element => {
  const [isMouseHover, setIsMouseHover] = useState<boolean>(false);

  return (
    <div id={props.id}>
      <Card className="relative p-8 w-[448px] h-[240px]">
        <img
          className="absolute top-8 left-5 w-10 h-10"
          src="/img/QuotationMark.png"
          alt="quotation mark"
        />
        <div
          className="font-openSans font-base font-light text-signoz-medium-light relative"
          dangerouslySetInnerHTML={{ __html: props.feedback }}
        />
        <div className="flex justify-between items-end">
          <AuthorBy
            position={props.authorPosition}
            name={props.authorName}
            avatar={props.authorImage}
            className="mt-14"
          />
          <div
            onMouseOver={() => setIsMouseHover(true)}
            onMouseOut={() => setIsMouseHover(false)}
            className={cx("linkedin-icon", "cursor-pointer")}
          >
            {getIcons("linkedin", !isMouseHover ? "#A3B4CB" : "#F25733")}
          </div>
        </div>
      </Card>
    </div>
  );
};

export interface FeedbackCardProps {
  feedback: string;
  authorName: string;
  authorImage: string;
  authorPosition: string;
  reference?: React.Ref<HTMLDivElement>;
  id: string;
}

export default FeedbackCard;
