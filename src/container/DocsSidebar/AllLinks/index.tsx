import React from "react";
import { DocsLinks } from "..";
import Link from "./Link";

interface LinksProps {
  links: DocsLinks[];
  rootLinks: DocsLinks[];
  activeLink: string;
  setActiveLink: (link: string) => void;
}

const Links = ({
  links,
  rootLinks,
  activeLink,
  setActiveLink,
}: LinksProps): JSX.Element => {
  return (
    <div>
      {links.map((link, index) => (
        <Link
          rootLinks={rootLinks}
          links={link}
          index={index}
          key={link.link + link.name}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
      ))}
    </div>
  );
};

export default Links;
