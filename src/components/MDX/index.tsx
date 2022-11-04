import React, { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import Image from "./components/Image";
import CustomLink from "./components/Link";
import { TocHeadingProps } from "./components/TOCInline";
import Pre from "./components/Pre";
import Paragraph from "./components/Paragraph";
import Heading from "./components/Heading";
import OL from "./components/OL";
import UL from "./components/UL";
import LI from "./components/LI";
import Table from "./components/Table";
import th from "./components/th";
import Code from "./components/Code";
import TOCInline from "./components/TOCInline";
import Youtube from "./components/Youtube";
import ZoomImage from "./components/ZoomImage";
import tr from "./components/tr";
import DocList from "./components/Doc";
import ContributorHighlight from "./components/ContributorHighlight";
import BlockQuote from "./components/blockquote";

import { FrontMatterProps } from "lib/mdx";
import { AuthorDetails } from "../../../pages/blog/[...slug]";

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  p: Paragraph,
  h1: (props: any) => <Heading {...props} type="h1" />,
  h2: (props: any) => <Heading {...props} type="h2" />,
  h3: (props: any) => <Heading {...props} type="h3" />,
  h4: (props: any) => <Heading {...props} type="h4" />,
  h5: (props: any) => <Heading {...props} type="h5" />,
  h6: (props: any) => <Heading {...props} type="h6" />,
  code: Code,
  Youtube,
  ZoomImage,
  ol: OL,
  ul: UL,
  li: LI,
  table: Table,
  th,
  tr,
  DocList,
  ContributorHighlight,
  blockquote: BlockQuote,
};

interface MDXLayoutProps {
  prev: null | FrontMatterProps;
  next: null | FrontMatterProps;
  frontmatter: FrontMatterProps;
  authorDetails: AuthorDetails[];
  mdxSource: string;
  toc: TocHeadingProps["toc"];
}

export const MDXLayoutRenderer = ({ mdxSource, ...rest }: MDXLayoutProps) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);

  return <MDXLayout components={MDXComponents} {...rest} />;
};
