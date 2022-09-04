import TOCInline from "components/MDX/components/TOCInline";
import DocsSideBar from "container/DocsSidebar";
import React from "react";
import { LayoutProps } from ".";

const DocsLayout = ({ children, toc, docsLinks }: LayoutProps): JSX.Element => (
  <div className="flex flex-col md:flex-row">
    <div className="flex flex-1">
      <div className="relative px-4 pt-0 w-full">
        <DocsSideBar links={docsLinks} />
        <div
          className="h-screen hidden md:block inset-0 absolute"
          style={{
            borderRight: "1px solid #E6E6E6",
            zIndex: -1,
          }}
        />
      </div>
    </div>

    <div className="flex-[3] font-WorkSans px-4">{children}</div>

    <div className="md:flex hidden flex-1">
      <div className="relative pt-0">
        <div className="px-4">
          <TOCInline
            toc={toc}
            exclude="Overview"
            toHeading={6}
            isBorderVisible={false}
          />
        </div>
        <div
          className="h-screen absolute top-0 -z-10"
          style={{
            borderRight: "1px solid #E6E6E6",
          }}
        />
      </div>
    </div>
  </div>
);

export default DocsLayout;
