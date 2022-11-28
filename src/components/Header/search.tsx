import { DocSearch } from "@docsearch/react";
import cx from "classnames";
import "@docsearch/css";
import { useCallback, useEffect } from "react";
import { useIsDesktop } from "hooks/useDeviceType";
import Button from "components/Button";

function SearchContainer() {
  const isDesktop = useIsDesktop();
  const handlerClick = useCallback(() => {
    document.body.classList.remove("DocSearch--active");

    setTimeout(() => {
      window.scrollTo(0, 0);
      document.body.classList.add("DocSearch--active");
    }, 0);
  }, []);

  useEffect(() => {
    if (typeof window !== undefined) {
      const button = document.querySelector(".DocSearch-Button");

      const placeHolder = document.querySelector(
        ".DocSearch-Button-Placeholder"
      );

      if (button) {
        button.addEventListener("click", handlerClick);
        button.classList.add("w-full");
        if (placeHolder) {
          placeHolder.setAttribute("style", "display: block;");
        }
      }
    }

    return () => {
      if (typeof window !== undefined) {
        const el = document.querySelector(".DocSearch-Button");
        el?.removeEventListener("click", handlerClick);
      }
    };
  }, [handlerClick]);

  return (
    <span
      className={cx(
        "relative transform -translate-x-1/2 flex hover:border--[#f25733]",
        {
          "w-[95%]": !isDesktop,
        }
      )}
    >
      <DocSearch
        appId="R2IYF7ETH7"
        apiKey="599cec31baffa4868cae4e79f180729b"
        indexName="docsearch"
        placeholder="Type what you're looking for"
        translations={{
          button: {
            buttonText: "",
            buttonAriaLabel: "",
          },
        }}
      />
      <Button
        className="rounded-l-none text-base h-10 font-light leading-6 px-2 py-3 flex justify-center items-center"
        variant="primary"
      >
        Search
      </Button>
    </span>
  );
}

export default SearchContainer;
