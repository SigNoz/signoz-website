import TOCInline from "components/MDX/components/TOCInline";
import DocsSideBar from "container/DocsSidebar";
import React from "react";
import { LayoutProps } from ".";

const DocsLayout = ({ children, toc, docsLinks }: LayoutProps): JSX.Element => {
  return (
    <div className="flex">
      <div
        className="flex"
        style={{
          flex: 1,
        }}
      >
        <div className="relative p-4 pt-0">
          <DocsSideBar links={docsLinks} />
          <div
            className="h-screen inset-0 absolute"
            style={{
              borderRight: "1px solid #E6E6E6",
              zIndex: -1,
            }}
          />
        </div>
      </div>
      <div
        className=""
        style={{
          flex: 3,
        }}
      >
        {children}
      </div>
      <div
        className="flex"
        style={{
          flex: 1,
        }}
      >
        <div className="relative pt-0">
          <div className="pl-2">
            <TOCInline
              toc={toc}
              exclude="Overview"
              toHeading={6}
              isBorderVisible={false}
            />
          </div>
          <div
            className="h-screen absolute top-0"
            style={{
              borderRight: "1px solid #E6E6E6",
              zIndex: -1,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DocsLayout;
