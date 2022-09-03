import { useState } from "react";
import Links from "./AllLinks";

const DocsSideBar = ({ links }: DocsProps): JSX.Element => {
  const [activeLink, setActiveLink] = useState<string>("");

  return (
    <div className="font-WorkSans text-base md:text-lg">
      <Links
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        rootLinks={links}
        links={links}
      />
    </div>
  );
};

export interface DocsLinks {
  name: string;
  link: string;
  subLinks?: DocsLinks[];
}

interface DocsProps {
  links: DocsLinks[];
}

export default DocsSideBar;
