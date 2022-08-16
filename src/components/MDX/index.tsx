/* eslint-disable react/display-name */
import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import Image from "./components/Image";
import CustomLink from "./components/Link";
import TOCInline from "./components/TOCInline";
import Pre from "./components/Pre";
import { FrontMatterProps } from "lib/mdx";
import { AuthorDetails } from "../../../pages/blog/[...slug]";

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  // pre: Pre,
};

interface MDXLayoutProps {
  prev: null | FrontMatterProps;
  next: null | FrontMatterProps;
  frontmatter: FrontMatterProps;
  authorDetails: AuthorDetails[];
  mdxSource: string;
  toc: string[];
}

export const MDXLayoutRenderer = ({ mdxSource, ...rest }: MDXLayoutProps) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);

  return <MDXLayout components={MDXComponents} {...rest} />;
};
