/* eslint-disable @next/next/no-img-element */
import Card from "components/Card";
import { getBlogFooter, getTags } from "./utils";
import cx from "classnames";
import React, { useMemo, useCallback } from "react";
import { useRouter } from "next/router";

const BlogCard = ({
  tags,
  title,
  date = new Date(),
  timeToReadInMinutes,
  layout = "left",
  description,
  cardStyle,
  slug,
}: BlogCardProps) => {
  const dateToRender = useMemo(
    () => getBlogFooter(date, timeToReadInMinutes),
    [timeToReadInMinutes, date]
  );

  const { push } = useRouter();

  const onClickHandler = useCallback(() => {
    push(`/blog/${slug}`, undefined, {
      shallow: true,
      scroll: false,
    });
  }, [push, slug]);

  return (
    <Card
      style={{ padding: 0, ...cardStyle }}
      className={cx("flex p-0 cursor-pointer", {
        "flex-col": layout === "left",
        "flex-row": layout === "right",
      })}
      onClick={onClickHandler}
    >
      <div className="rounded-tr-lg rounded-tl-none overflow-hidden">
        <img
          alt="blog cover image"
          className="w-full h-full rounded-tr-lg rounded-tl-lg rounded-bl-none rounded-br-none"
          src={"/img/blog/header.jpg"}
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
    | "hero-section"
    | "blog-recent-post"
    | "product-updates"
    | "observability"
    | "tech-resources"
    | "dot-net"
    | "apm"
    | "community"
    | "database-monitoring"
    | "distributed-tracing"
    | "docker"
    | "elixir-erlang"
    | "go-golang"
    | "jaeger"
    | "java"
    | "javascript"
    | "open-source"
    | "opentelemetry-instrumentation"
    | "php"
    | "prometheus"
    | "python"
    | "ruby"
    | "rust"
    | "security"
    | "signoz"
    | "talks"
    | "tech-tutorial"
    | "tools-comparison"
    | "opentelemetry";
  title: string;
  date?: Date;
  timeToReadInMinutes: number;
  layout?: "right" | "left";
  description?: string;
  cardStyle?: React.CSSProperties;
  slug?: string;
  author?: any[];
}

export default BlogCard;
