import getIcons from "asset/icons";
import { useIsDesktop } from "hooks/useDeviceType";
import Link from "next/link";
import { useCallback, useState } from "react";

const LinkComponent = ({ subLinks, text }: LinkProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isDesktop = useIsDesktop();

  const onClickHandler = useCallback(() => {
    setIsOpen((state) => !state);
  }, []);

  return (
    <>
      {subLinks.length > 0 && (
        <div className="flex  flex-col mt-4">
          <div
            onClick={onClickHandler}
            className="gap-[10px] flex items-center"
          >
            <span className="text-signoz-primary-light font-normal font-openSans">
              {text}
            </span>
            {!isDesktop && <>{getIcons(isOpen ? "arrowDown" : "arrowUp")}</>}
          </div>

          {(isOpen || isDesktop) && (
            <div className="mt-2 flex flex-col">
              {subLinks.map((link) => (
                <Link scroll={false} href={link.to} passHref key={link.text}>
                  <a className="font-light mt-3 text-base font-openSans text-white">
                    {link.text}
                  </a>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export interface SubLinks {
  text: string;
  to: string;
}

interface LinkProps {
  subLinks: SubLinks[];
  text: string;
}

export default LinkComponent;
