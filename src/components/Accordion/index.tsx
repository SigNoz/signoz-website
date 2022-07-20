import { useCallback, useState } from "react";
import cx from "classnames";

import getIcons from "asset/icons";

const Accordion = ({ expandableText, text }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onToggleHandler = useCallback(() => {
    setIsOpen((state) => !state);
  }, []);

  return (
    <div
      style={{
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.03)",
      }}
      onClick={onToggleHandler}
      className={cx("flex py-6 px-4 bg-white cursor-pointer flex-col", {
        "text-signoz-primary": isOpen,
      })}
    >
      <div className="flex">
        <div className="flex-1 font-openSans font-normal text-base leading-relaxed mr-3 ">
          {text}
        </div>
        <div className="flex justify-center items-center">
          {getIcons(!isOpen ? "plus" : "minus")}
        </div>
      </div>

      {isOpen && (
        <div className="text-dark-intermediate font-openSans text-sm mt-3">
          {expandableText}
        </div>
      )}
    </div>
  );
};

interface AccordionProps {
  text: string;
  expandableText: string;
}

export default Accordion;
