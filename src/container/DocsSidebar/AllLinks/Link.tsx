import React, { useCallback, useMemo, useState } from "react";
import { DocsLinks } from "..";
import cx from "classnames";
import AllLink from "./index";
import getIcons from "asset/icons";
import { useRouter } from "next/router";
import { getActivePath } from "container/Layout/util";

const Link = ({
  links,
  index,
  rootLinks,
  activeLink,
  setActiveLink,
  level,
  paths,
}: LinksProps): JSX.Element => {
  const { name, subLinks, link, url } = links;
  const isCurrent = paths[level] === link;
  const [isExpandale, setIsExpandale] = useState<boolean>(isCurrent);

  const { asPath } = useRouter();

  const isActive = useMemo(() => getActivePath(asPath), [asPath]);

  const isCurrentLinkActive = isActive?.link === link;

  const { replace } = useRouter();

  const onClickHandler: React.MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      setIsExpandale((value) => !value);
      setActiveLink(link);
      replace(`/docs${url}`);
    },
    [link, setActiveLink, replace, url]
  );

  return (
    <>
      <div
        onClick={onClickHandler}
        key={name}
        className="w-full cursor-pointer min-w-[200px]"
      >
        <div className="w-100% flex flex-col gap-4">
          <div
            className={cx(
              " text-lg tracking-lightTigher p-[6px] rounded hover:bg-[#E6E6E6]",
              {
                "text-signoz-primary-light bg-[#E6E6E6]": isCurrentLinkActive,
                "text-signoz-dark-light": !isCurrentLinkActive,
              }
            )}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-between cursor-pointer">
                {name}
              </div>
              {subLinks &&
                subLinks?.length > 0 &&
                isExpandale &&
                getIcons("arrowDown", "#74797F")}
              {!isExpandale && subLinks && subLinks?.length > 0 && (
                <div className="-rotate-90">
                  {getIcons("arrowDown", "#74797F")}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={cx("pl-2", {
          "pl-[index]": index !== 0,
        })}
      >
        {isExpandale && subLinks && (
          <AllLink
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            rootLinks={rootLinks}
            links={subLinks}
            level={level + 1}
            paths={paths}
          />
        )}
      </div>
    </>
  );
};

export interface LinksProps {
  links: DocsLinks;
  index: number;
  rootLinks: DocsLinks[];
  activeLink: string;
  setActiveLink: (link: string) => void;
  level: number;
  paths: string[];
}

export default Link;
