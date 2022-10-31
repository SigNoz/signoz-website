import cx from "classnames";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";

export interface TocHeading {
  value: string;
  depth: number;
  url: string;
}

export interface TocHeadingProps {
  indentDepth?: number;
  fromHeading?: number;
  toHeading?: number;
  asDisclosure?: boolean;
  exclude?: string | string[];
  toc: TocHeading[];
  isBorderVisible?: boolean;
}

const getInitialHeading = (
  toc: TocHeading[],
  indentDepth: TocHeadingProps["indentDepth"] = 0,
  slug?: string | undefined
): string => {
  if (slug) {
    return `#${slug}`;
  }

  const initialHeading = toc.find((heading) => heading.depth <= indentDepth);
  return initialHeading?.url || "";
};

/**
 * Generates an inline table of contents
 * Exclude titles matching this string (new RegExp('^(' + string + ')$', 'i')).
 * If an array is passed the array gets joined with a pipe (new RegExp('^(' + array.join('|') + ')$', 'i')).
 */
const TOCInline = ({
  toc = [],
  indentDepth = 3,
  fromHeading = 1,
  toHeading = 6,
  exclude = "",
  isBorderVisible = true,
}: TocHeadingProps) => {
  const re = Array.isArray(exclude)
    ? new RegExp("^(" + exclude.join("|") + ")$", "i")
    : new RegExp("^(" + exclude + ")$", "i");
  const router = useRouter();

  const [selectedUrl, setSelectedUrl] = useState<TocHeading["url"]>();

  useEffect(() => {
    setSelectedUrl(
      getInitialHeading(toc, indentDepth, router.asPath.split("#")[1])
    );
  }, [indentDepth, router.asPath, toc]);

  const filteredToc = toc.filter(
    (heading) =>
      heading.depth >= fromHeading &&
      heading.depth <= toHeading &&
      !re.test(heading.value)
  );

  const onClickHandler: React.MouseEventHandler<HTMLLIElement> = useCallback(
    (event) => {
      // @ts-ignore
      const hash = event.target.hash;
      setSelectedUrl(hash);
    },
    []
  );

  const tocList = (
    <ul>
      {filteredToc.map((heading) => {
        const isSelected = selectedUrl === heading.url;
        const depth = heading.depth;
        return (
          <div key={heading.value} className={cx("flex mt-3")}>
            <div
              className={cx("ml-[-2px]", {
                "border-l-signoz-primary": isSelected,
                "border-l-2 border-solid mr-4": isBorderVisible,
              })}
            />
            <li onClick={onClickHandler}>
              <a
                className={cx("text-sm font-normal inline-block", {
                  "text-signoz-dark-light font-semibold text-base mb-2":
                    !isSelected,
                  "text-signoz-primary  font-normal text-base mb-[6px]":
                    isSelected,
                  [`ml-${depth}`]: depth,
                })}
                href={heading.url}
              >
                {heading.value}
              </a>
            </li>
          </div>
        );
      })}
    </ul>
  );

  return (
    <div className="font-WorkSans">
      <div className="text-signoz-dark-light font-normal text-sm">
        On this page
      </div>
      <div className="border-l-2 border-solid list-none">{tocList}</div>
    </div>
  );
};

export default TOCInline;
