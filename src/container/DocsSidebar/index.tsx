import { useRouter } from "next/router";
import { useState } from "react";
import Links from "./AllLinks";

const DocsSideBar = ({ links }: DocsProps): JSX.Element => {
  const { asPath } = useRouter();
  const [activeLink, setActiveLink] = useState<string>("");

  const paths = asPath
    .split("/")
    // Remove empty strings
    .filter((e) => Boolean(e))
    // avoiding /docs in the path
    .slice(1)
    // add / to the end of the path
    .map((e) => `/${e}`);

  return (
    <div className="font-WorkSans text-base md:text-lg">
      <Links
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        rootLinks={links}
        links={links}
        level={0}
        paths={paths}
      />
    </div>
  );
};

export interface DocsLinks {
  name: string;
  link: string;
  url: string;
  subLinks?: DocsLinks[];
}

interface DocsProps {
  links: DocsLinks[];
}

export default DocsSideBar;
