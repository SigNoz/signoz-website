/* eslint-disable @next/next/no-img-element */
import TOCInline from "components/MDX/components/TOCInline";
import { useIsDesktop } from "hooks/useDeviceType";
import NextImage from "next/image";
import React, { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { LayoutProps } from ".";
import { AuthorDetails } from "../../../pages/blog/[...slug]";
import getFormattedDate from "./util";
import cx from "classnames";
import ShareIcons from "components/ShareIcons";
import BlogTag from "components/BlogTag";

const Layout = ({
  children,
  frontMatter,
  authorDetails,
  toc,
  shareIcons,
}: LayoutProps) => {
  const {
    title,
    date = "",
    image,
    readingTime,
    hide_table_of_contents,
  } = frontMatter;

  const isDesktop = useIsDesktop(1200);
  const titleRef = useRef<HTMLDivElement>(null);
  const blogImageRef = useRef<HTMLImageElement>(null);
  const [marginTop, setMarginTop] = useState<number>(0);

  useEffect(() => {
    if (titleRef.current && blogImageRef.current) {
      const titletop = titleRef.current.getBoundingClientRect().top;
      const blogImageTop = blogImageRef.current.getBoundingClientRect().top;
      const diff = blogImageTop - titletop;
      setMarginTop(diff);
    }
  }, []);

  const onClickHandler = useCallback(
    (author: AuthorDetails) => () => {
      window.open(author.url, "_blank");
    },
    []
  );

  return (
    <div className="w-full m-auto flex flex-col gap-4 md:flex-row">
      {isDesktop && !hide_table_of_contents && (
        <div
          className={cx("max-w-[26rem]")}
          style={{ marginTop: !isDesktop ? 0 : marginTop }}
        >
          <TOCInline toc={toc} exclude="Overview" toHeading={6} />
        </div>
      )}
      <div className="md:max-w-[684px] md:m-auto flex flex-col gap-4">
        <div>
          <div ref={titleRef} id="blogTitle" className="px-4 py-4 md:py-0">
            <h1 className="text-2xl md:text-3xl font-bold tracking-lightTigher leading-[120%] text-signoz-medium">
              {title}
            </h1>
            {/* <div className="text-base tracking-lightTigher mt-4 text-signoz-dark-intermediate">
              {description}
            </div> */}

            <div className="mt-6 flex md:flex-row flex-col gap-4">
              {authorDetails.map((author: AuthorDetails) => (
                <div key={author.slug + author.date}>
                  <div className="flex items-center">
                    <NextImage
                      src={author.avatar}
                      layout="intrinsic"
                      width={48}
                      height={48}
                      objectFit="cover"
                      onClick={onClickHandler(author)}
                      className="cursor-pointer rounded-full"
                    />
                    <div className="flex flex-col gap-1 items-start justify-start ml-3">
                      <div
                        onClick={onClickHandler(author)}
                        className="text-base text-signoz-dark-intermediate font-semibold leading-[150%] w-60 cursor-pointer"
                      >
                        {author.name}
                      </div>
                      <div className="text-xs text-signoz-medium tracking-lightTigher">
                        {author.occupation}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-1">
              <div className="text-xs text-signoz-medium font-semibold">
                {getFormattedDate(new Date(date || ""))}
              </div>
            </div>

            {readingTime && (
              <div className="text-xs text-signoz-medium font-semibold mt-4 mb-6">
                {readingTime.text}
              </div>
            )}

            <img
              id="cover_image"
              className="w-full h-full"
              src={image}
              alt="cover_image"
              ref={blogImageRef}
            />
          </div>
        </div>
        <div className="px-4">{children}</div>
      </div>
      <div
        style={{ marginTop: !isDesktop ? 0 : marginTop }}
        className="flex flex-col md:ml-4 md:w-[30%] w-full"
      >
        <ShareIcons shareIcons={shareIcons} />

        <BlogTag tags={frontMatter.tags} />
      </div>
    </div>
  );
};

export default Layout;
