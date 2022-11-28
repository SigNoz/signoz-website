import React, { useCallback, useState } from "react";
import cx from "classnames";
import getIcons from "asset/icons";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { headerElements, leftItems, rightItems } from "./config";
import { useIsDesktop } from "hooks/useDeviceType";
import { useQuery } from "@tanstack/react-query";
import getRepoInfo from "api/getRepoInfo";
import { useWindowScroll } from "react-use";
import Search from "./search";

const PropertyControlledComponent = dynamic(
  () => import("components/PropertyControllComponent"),
  { ssr: false }
);

const Header = ({ isBlogStripOpen }: HeaderProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const repoInfoResult = useQuery({
    queryFn: getRepoInfo,
  });
  const { push } = useRouter();
  const { y } = useWindowScroll();

  const onClickLogoHandler = useCallback(() => {
    push("/", undefined, {
      shallow: true,
      scroll: false,
    });
  }, [push]);

  const onToggleHandler = () => {
    setIsOpen((state) => !state);
  };

  const router = useRouter();

  const isDesktop = useIsDesktop(980);

  const onGithubClickHandler = () => {
    window.open(repoInfoResult.data?.payload?.svn_url, "_blank");
  };

  const repoCount = repoInfoResult.data?.payload?.stargazers_count || "-";

  return (
    <header
      className={cx("list-none fixed w-full bg-white mb-5 py-6 px-4 z-50", {
        flex: isDesktop,
        "items-center": isDesktop,
      })}
      style={{ top: y === 0 ? (isBlogStripOpen && isDesktop ? "48px" : 0) : 0 }}
    >
      <div className="font-openSans flex items-center justify-between relative">
        <div
          onClick={onClickLogoHandler}
          className="flex items-center cursor-pointer"
        >
          <div>{getIcons("logo")}</div>
          <div className="text-signoz-medium text-xl ml-3 font-bold hover:text-[#f25733]">
            SigNoz
          </div>
        </div>
        <PropertyControlledComponent controllerProperty={!isDesktop}>
          <div onClick={onToggleHandler} className="cursor-pointer">
            {isOpen ? getIcons("close") : getIcons("hamburgermenu")}
          </div>
        </PropertyControlledComponent>
      </div>
      <PropertyControlledComponent controllerProperty={isOpen}>
        <div className="mt-4 absolute z-10 left-0 bg-white w-full px-6 pb-8 border">
          <div className="flex flex-col justify-center gap-6 border">
            {headerElements.map(({ name, path }) => {
              const isActive = router.pathname === path;
              return (
                <ul key={name}>
                  <li
                    className={cx({
                      "text-base text-signoz-medium font-bold": isActive,
                      "font-semibold text-signoz-dark-light text-base":
                        !isActive,
                    })}
                  >
                    <Link scroll={false} href={path}>
                      {name}
                    </Link>
                  </li>
                </ul>
              );
            })}
            <div onClick={onGithubClickHandler} className="flex gap-2">
              {getIcons("github")}
              {repoCount}
            </div>
          </div>
        </div>
      </PropertyControlledComponent>
      <PropertyControlledComponent controllerProperty={isDesktop}>
        <div className="w-full justify-evenly items-center flex gap-8">
          <div className="flex gap-12">
            {leftItems.map(({ name, path }) => {
              const isActive = router.pathname === path;
              return (
                <ul key={name}>
                  <li
                    className={cx({
                      "text-base text-signoz-medium font-bold": isActive,
                      "font-semibold text-signoz-dark-light text-base":
                        !isActive,
                    })}
                  >
                    <Link scroll={false} href={path}>
                      <a className="hover:text-[#f25733]">{name}</a>
                    </Link>
                  </li>
                  <PropertyControlledComponent controllerProperty={isActive}>
                    <div className="h-[2px] w-4 bg-signoz-primary" />
                  </PropertyControlledComponent>
                </ul>
              );
            })}
          </div>
          <div className="flex gap-12">
            <div
              onClick={onGithubClickHandler}
              className="flex gap-2 items-center font-bold cursor-pointer"
            >
              {getIcons("github")}
              <a className="hover:text-[#f25733]">{repoCount}</a>
            </div>
            {rightItems.map(({ name, path }) => {
              const isActive = router.pathname === path;
              return (
                <ul key={name}>
                  <li
                    className={cx({
                      "text-base text-signoz-medium font-bold": isActive,
                      "font-semibold text-signoz-dark-light text-base":
                        !isActive,
                    })}
                  >
                    <Link scroll={false} href={path}>
                      <a className="hover:text-[#f25733]">{name}</a>
                    </Link>
                  </li>

                  <PropertyControlledComponent controllerProperty={isActive}>
                    <div className="h-[2px] w-4 bg-signoz-primary" />
                  </PropertyControlledComponent>
                </ul>
              );
            })}
          </div>
          <Search></Search>
        </div>
      </PropertyControlledComponent>
    </header>
  );
};

interface HeaderProps {
  isBlogStripOpen: boolean;
}

export default Header;
