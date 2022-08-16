import { DocSearch } from "@docsearch/react";
import "@docsearch/css";
import { useCallback, useEffect } from "react";

function DocSearchContainer() {
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
    <DocSearch
      appId="R2IYF7ETH7"
      apiKey="599cec31baffa4868cae4e79f180729b"
      indexName="docsearch"
      placeholder="Type what you’re looking for"
      translations={{
        button: {
          buttonText: "Type what you’re looking for",
          buttonAriaLabel: "Search",
        },
      }}
    />
  );
}

export default DocSearchContainer;
