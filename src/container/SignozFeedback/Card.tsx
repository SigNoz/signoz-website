/* eslint-disable @next/next/no-img-element */
import getIcons from "asset/icons";
import AuthorBy from "components/AuthorBy";
import Card from "components/Card";
import cx from "classnames";
import { useRef, useState } from "react";

import { useIntersection } from 'react-use';

const FeedbackCard = (props: FeedbackCardProps): JSX.Element => {
  const [isMouseHover, setIsMouseHover] = useState<boolean>(false);

  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1
  });

  return (
    <div ref={intersectionRef}>
      {intersection && intersection.intersectionRatio < 1
        ? 'Obscured'
        : 'Fully in view'}
      <Card className="w-[448px] h-[240px]">
        <img
          className="absolute top-0 left-0 w-10 h-10"
          src="/images/QuotationMark.png"
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
}

export default FeedbackCard;
