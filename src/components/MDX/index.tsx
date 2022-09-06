import React, { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";
import Image from "./components/Image";
import CustomLink from "./components/Link";
import { TocHeadingProps } from "./components/TOCInline";
import Pre from "./components/Pre";
import Paragraph from "./components/Paragraph";
import Heading from "./components/Heading";
import dynamic from "next/dynamic";
const Code = dynamic(() => import("./components/Code"), {
  ssr: false,
});
const TOCInline = dynamic(() => import("./components/TOCInline"), {
  ssr: false,
});
const Youtube = dynamic(() => import("./components/Youtube"), {
  ssr: false,
});
const ZoomImage = dynamic(() => import("./components/ZoomImage"), {
  ssr: false,
});

import { FrontMatterProps } from "lib/mdx";
import { AuthorDetails } from "../../../pages/blog/[...slug]";

export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  p: Paragraph,
  h1: (props: any) => {
    return <Heading {...props} type="h1" />;
  },
  h2: (props: any) => <Heading {...props} type="h2" />,
  h3: (props: any) => <Heading {...props} type="h3" />,
  h4: (props: any) => <Heading {...props} type="h4" />,
  h5: (props: any) => <Heading {...props} type="h5" />,
  h6: (props: any) => <Heading {...props} type="h6" />,
  code: Code,
  Youtube,
  ZoomImage,
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
