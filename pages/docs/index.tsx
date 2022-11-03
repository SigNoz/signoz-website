import { MDXLayoutRenderer } from "components/MDX";
import { TocHeadingProps } from "components/MDX/components/TOCInline";
import Layout from "container/Layout";

import docsLinks from "lib/docs/docsSidebar";
import { FrontMatterProps, getFileBySlug } from "lib/mdx";
import { GetStaticPropsContext, NextPage } from "next";

interface DocsProps {
  docs: FrontMatterProps[];
  post: {
    frontMatter: FrontMatterProps;
    mdxSource: string;
    toc: TocHeadingProps["toc"];
  };
}

const Docs: NextPage<DocsProps> = (props: DocsProps): JSX.Element => {
  const { post } = props;
  const { frontMatter, mdxSource, toc } = post;

  return (
    <Layout
      authorDetails={[]}
      frontMatter={frontMatter}
      type="docs"
      toc={toc}
      shareIcons={[]}
      docsLinks={docsLinks}
    >
      <div className="flex flex-col gap-5">
        <MDXLayoutRenderer
          {...{
            frontmatter: frontMatter,
            mdxSource,
            authorDetails: [],
            next: null,
            prev: null,
            toc,
          }}
        />
      </div>
    </Layout>
  );
};

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const post = await getFileBySlug("docs", "/introduction");

  return { props: { post } };
}

interface DocsProps {
  docs: FrontMatterProps[];
}

export default Docs;
