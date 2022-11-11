import TOCInline from "components/MDX/components/TOCInline";
import DocsSideBar from "container/DocsSidebar";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import { LayoutProps } from ".";
import { getActivePath } from "./util";

const DocsLayout = ({ children, toc, docsLinks }: LayoutProps): JSX.Element => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const { asPath } = useRouter()

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const activeLink = useMemo(() => getActivePath(asPath), [asPath])

  const title = `${activeLink?.name} | Signoz`

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-1">
        <div className="relative px-4 pt-0 w-full">
          <DocsSideBar links={docsLinks} />
        </div>
      </div>

      <Head>
        <title>{title}</title>
      </Head>

      {isMounted && (
        <div
          style={{ borderTop: "none" }}
          className="flex-[3] border border-l-signoz-border border-r-signoz-border w-full md:max-w-[60%] font-WorkSans px-4"
        >
          {children}
        </div>
      )}

      <div className="md:flex hidden flex-1">
        <div className="relative pt-0">
          <div className="px-4 sticky top-40">
            <TOCInline toc={toc} exclude="Overview" toHeading={6} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsLayout;
