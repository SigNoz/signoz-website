import TOCInline from "components/MDX/components/TOCInline";
import DocsSideBar, { DocsLinks } from "container/DocsSidebar";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import { LayoutProps } from ".";

const DocsLayout = ({ children, toc, docsLinks }: LayoutProps): JSX.Element => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const { asPath } = useRouter()


  const allLinks = useMemo(() => {
    const initialValue: DocsLinks[] = []
    return docsLinks.reduce((acc, curr) => [...acc, curr, ...(curr?.subLinks?.map((subLink) => subLink) || [])], initialValue)
  }, [docsLinks])

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const lastString = asPath.split("/").filter(e => Boolean(e));

  const activeLink = allLinks.find(link => link.link === `/${lastString[lastString.length - 1]}`)

  const title = `${activeLink?.name} | Signoz`

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-1">
        <div className="relative px-4 pt-0 w-full">
          <DocsSideBar links={docsLinks} />
          <div className="min-h-screen hidden md:block inset-0 absolute border border-r-signoz-border z-[-1]" />
        </div>
      </div>

      <Head>
        <title>{title}</title>
      </Head>

      {isMounted && (
        <div className="flex-[3] max-w-[60%] font-WorkSans px-4">
          {children}
        </div>
      )}

      <div className="md:flex hidden flex-1">
        <div className="relative pt-0">
          <div className="px-4">
            <TOCInline toc={toc} exclude="Overview" toHeading={6} />
          </div>
          <div className="h-screen absolute top-0 -z-10 border border-signoz-border" />
        </div>
      </div>
    </div>
  );
};

export default DocsLayout;
