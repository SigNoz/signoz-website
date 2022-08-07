import Card from "components/Card";
import NextImage from "next/image";
import { getBlogFooter, getTags, months } from "./utils";
import cx from "classnames";
import React, { useMemo } from "react";

const BlogCard = ({
  tags,
  title,
  date,
  timeToReadInMinutes,
  layout = "left",
  description,
  cardStyle,
}: BlogCardProps) => {
  const dateToRender = useMemo(
    () => getBlogFooter(date, timeToReadInMinutes),
    [timeToReadInMinutes, date]
  );

  return (
    <Card
      style={{ padding: 0, ...cardStyle }}
      className={cx("min-w-[369px] flex p-0", {
        "flex-col": layout === "left",
        "flex-row": layout === "right",
      })}
    >
      <div className="min-w-[380px] rounded-lg overflow-hidden">
        <NextImage
          src="/blogs/header.jpg"
          layout="responsive"
          width={380}
          height={208}
        />
      </div>

      <div className="p-4">
        <div
          className={cx("text-sm font-openSans font-semibold", {
            "text-signoz-primary-light": tags === "tools",
            "text-signoz-purple": tags === "technical",
            "text-signoz-blue": tags === "product",
          })}
        >
          {getTags(tags)}
        </div>

        <div className="mt-2 line-clamp-2 font-WorkSans font-semibold text-lg">
          {title}
        </div>

        {(description?.length || 0) > 0 && (
          <div className="font-openSans text-xs line-clamp-3 text-signoz-pure font-light leading-5">
            {description}
          </div>
        )}

        <div className="mt-4 text-signoz-dark-light font-openSans font-normal text-xs">
          {dateToRender}
        </div>
      </div>
    </Card>
  );
};

export interface BlogCardProps {
  tags:
    | "product"
    | "tools"
    | "technical"
    | "open-telementry-implementations"
    | "most-recent-post"
    | "hero-section";
  title: string;
  date: Date;
  timeToReadInMinutes: number;
  layout?: "right" | "left";
  description?: string;
  cardStyle?: React.CSSProperties;
}

export default BlogCard;
