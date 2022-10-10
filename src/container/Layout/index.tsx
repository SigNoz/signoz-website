import { TocHeadingProps } from "components/MDX/components/TOCInline";
import { ShareIcon } from "components/ShareIcons";
import { DocsLinks } from "container/DocsSidebar";
import { FrontMatterProps } from "lib/mdx";
import { AuthorDetails } from "../../../pages/blog/[...slug]";
import BlogsLayout from "./Blogs";
import DocsLayout from "./Docs";

const Layout = ({
  children,
  type,
  authorDetails,
  frontMatter,
  toc,
  docsLinks,
  shareIcons,
}: LayoutProps) => {
  if (type === "docs") {
    return (
      <DocsLayout
        {...{
          authorDetails,
          children,
          docsLinks,
          frontMatter,
          toc,
          type,
          shareIcons,
        }}
      />
    );
  }
  if (type === "blogs") {
    return (
      <BlogsLayout
        {...{
          authorDetails,
          children,
          docsLinks,
          frontMatter,
          toc,
          type,
          shareIcons,
        }}
      />
    );
  }

  return <div>Invalid Layout</div>;
};

export interface LayoutProps {
  type: "blogs" | "docs";
  children: React.ReactNode;
  frontMatter: FrontMatterProps;
  authorDetails: AuthorDetails[];
  toc: TocHeadingProps["toc"];
  docsLinks: DocsLinks[];
  shareIcons: ShareIcon[];
}

export default Layout;
