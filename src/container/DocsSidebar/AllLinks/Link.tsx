import { useCallback, useMemo, useState } from "react";
import { DocsLinks } from "..";
import cx from "classnames";
import AllLink from "./index";
import getIcons from "asset/icons";
import { getPathFromNodeToRoot } from "lib/utils/getPathFromNodeToRoot";
import { useRouter } from "next/router";

const Link = ({
  links,
  index,
  rootLinks,
  activeLink,
  setActiveLink,
}: LinksProps): JSX.Element => {
  const { name, subLinks, link } = links;
  const [isExpandale, setIsExpandale] = useState<boolean>(false);
  const { replace } = useRouter();

  const activePath = useMemo(
    () => getPathFromNodeToRoot(rootLinks, activeLink),
    [activeLink, rootLinks]
  );

  const isPresent = activePath.includes(link);

  const onClickHandler = useCallback(() => {
    if (subLinks) {
      setIsExpandale(!isExpandale);
    }
    setActiveLink(link);
    const rootpaths: string = getPathFromNodeToRoot(rootLinks, link).join("");

    replace(`/docs${rootpaths}`);
  }, [
    subLinks,
    setIsExpandale,
    isExpandale,
    link,
    setActiveLink,
    rootLinks,
    replace,
  ]);

  return (
    <div key={name} className="w-[200px]">
      <div className="w-100% flex flex-col gap-4">
        <div
          onClick={onClickHandler}
          className={cx(
            " text-lg tracking-lightTigher p-[6px] rounded hover:bg-[#E6E6E6] cursor-pointer",
            {
              "text-signoz-primary-light bg-[#E6E6E6]": isPresent,
              "text-signoz-dark-light": !isPresent,
            }
          )}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between">{name}</div>
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
            />
          )}
        </div>
      </div>
    </div>
  );
};

interface LinksProps {
  links: DocsLinks;
  index: number;
  rootLinks: DocsLinks[];
  activeLink: string;
  setActiveLink: (link: string) => void;
}

export default Link;
