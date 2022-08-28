import TOCInline, {
  TocHeadingProps,
} from "components/MDX/components/TOCInline";
import { useIsDesktop } from "hooks/useDeviceType";
import { FrontMatterProps } from "lib/mdx";
import NextImage from "next/image";
import React from "react";
import { AuthorDetails } from "../../../pages/blog/[...slug]";
import getFormattedDate from "./util";

const Layout = ({
  children,
  frontMatter,
  authorDetails,
  toc,
}: LayoutRendererProps) => {
  const { title, description, date = "", image } = frontMatter;
  const isDesktop = useIsDesktop(1200);

  return (
    <div className="w-full m-auto flex flex-col gap-4  md:flex-row">
      {isDesktop && (
        <div className="max-w-[26rem]">
          <TOCInline toc={toc} exclude="Overview" toHeading={6} />
        </div>
      )}
      <div className="md:max-w-[684px] md:m-auto  flex flex-col gap-4">
        <div>
          <NextImage
            placeholder="blur"
            src={image}
            blurDataURL={image}
            layout="responsive"
            height={172}
            width={400}
          />
          <div className="p-4">
            <div className="text-2xl font-bold tracking-lightTigher leading-[120%] text-signoz-medium">
              {title}
            </div>
            <div className="text-base tracking-lightTigher mt-4 text-signoz-dark-intermediate">
              {description}
            </div>
            <div className="mt-6">
              {authorDetails.map((author: AuthorDetails) => {
                return (
                  <div key={author.slug + author.date}>
                    <div className="flex items-center">
                      <NextImage
                        src={author.avatar}
                        layout="intrinsic"
                        width={48}
                        height={48}
                      />
                      <div className="flex flex-col gap-1 items-start justify-start ml-3">
                        <div className="text-base text-signoz-dark-intermediate font-semibold leading-[150%] w-60">
                          {author.occupation}
                        </div>
                        <div className="text-xs text-signoz-medium tracking-lightTigher">
                          {author.name}
                        </div>
                      </div>
                    </div>
                    <div className="mt-9 flex items-center gap-1">
                      <div className="text-xs text-signoz-medium font-semibold">
                        {getFormattedDate(new Date(date || ""))} ·
                      </div>
                      <div className="text-xs text-signoz-medium font-semibold">
                        {author.readingTime.text}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {!isDesktop && <TOCInline toc={toc} exclude="Overview" toHeading={6} />}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

interface LayoutRendererProps {
  children: React.ReactNode;
  frontMatter: FrontMatterProps;
  authorDetails: AuthorDetails[];
  toc: TocHeadingProps["toc"];
}

export default Layout;
