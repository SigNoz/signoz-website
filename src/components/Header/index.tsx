import React, { useState } from "react";
import cx from "classnames";
import getIcons from "asset/icons";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { headerElements, leftItems, rightItems } from "./config";
import { useIsDesktop } from "hooks/useDeviceType";

const PropertyControlledComponent = dynamic(
  () => import("components/PropertyControllComponent"),
  { ssr: false }
);

const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleHandler = () => {
    setIsOpen((state) => !state);
  };

  const router = useRouter();

  const isDesktop = useIsDesktop(980);

  return (
    <header
      className={cx({
        flex: isDesktop,
        "items-center": isDesktop,
      })}
    >
      <div className="font-openSans flex items-center justify-between relative">
        <div className="flex items-center">
          <div>{getIcons("logo")}</div>
          <div className="text-signoz-medium text-xl ml-3 font-bold">
            SigNoz
          </div>
        </div>
        <PropertyControlledComponent controllerProperty={!isDesktop}>
          <div onClick={onToggleHandler} className="cursor-pointer">
            {isOpen ? getIcons("closeIcon") : getIcons("hamburgermenu")}
          </div>
        </PropertyControlledComponent>
      </div>

      <PropertyControlledComponent controllerProperty={isOpen}>
        <div className="mt-4 absolute z-10 left-0 bg-white w-full px-6 pb-8">
          <div className="flex flex-col gap-6">
            {headerElements.map(({ name, path }) => {
              const isActive = router.pathname === path;

              return (
                <ul key={name}>
                  <li
                    className={
                      isActive
                        ? "text-base text-signoz-medium font-bold"
                        : "font-semibold text-signoz-dark-light text-base"
                    }
                  >
                    <Link href={path}>{name}</Link>
                  </li>
                </ul>
              );
            })}
            <div className="flex gap-2">{getIcons("github")}6,699</div>
          </div>
        </div>
      </PropertyControlledComponent>
      <PropertyControlledComponent controllerProperty={isDesktop}>
        <div className="w-full justify-around items-center flex">
          <div className="flex gap-12">
            {leftItems.map(({ name, path }) => {
              const isActive = router.pathname === path;
              return (
                <ul key={name}>
                  <li
                    className={
                      isActive
                        ? "text-base text-signoz-medium font-bold"
                        : "font-semibold text-signoz-dark-light text-base"
                    }
                  >
                    <Link href={path}>{name}</Link>
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="flex gap-12">
            <div className="flex gap-2 items-center font-bold cursor-pointer">
              {getIcons("github")}6999
            </div>
            {rightItems.map(({ name, path }) => {
              const isActive = router.pathname === path;
              return (
                <ul key={name}>
                  <li
                    className={
                      isActive
                        ? "text-base text-signoz-medium font-bold"
                        : "font-semibold text-signoz-dark-light text-base"
                    }
                  >
                    <Link href={path}>{name}</Link>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </PropertyControlledComponent>
    </header>
  );
};

export default Header;
