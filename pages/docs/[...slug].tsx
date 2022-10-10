import { MDXLayoutRenderer } from "components/MDX";
import { TocHeadingProps } from "components/MDX/components/TOCInline";
import docsLinks from "lib/docsSidebar";
import Layout from "container/Layout";
import { formatSlug, FrontMatterProps, getFileBySlug, getFiles } from "lib/mdx";
import { GetStaticPropsContext, NextPage } from "next";

interface DocsProps {
  docs: FrontMatterProps[];
  post: {
    frontMatter: FrontMatterProps;
    mdxSource: string;
    toc: TocHeadingProps["toc"];
  };
}

export async function getStaticPaths() {
  const posts = getFiles("docs");
  return {
    paths: posts.map((p) => {
      const formatedSlug = formatSlug(p).split("/");
      return {
        params: {
          slug: formatedSlug,
        },
      };
    }),
    fallback: false,
  };
}

const Docs: NextPage<DocsProps> = (props: DocsProps): JSX.Element => {
  const { post } = props;

  const { frontMatter, mdxSource, toc } = post;

  return (
    <Layout
      authorDetails={[]}
      type="docs"
      frontMatter={frontMatter}
      toc={toc}
      docsLinks={docsLinks}
      shareIcons={[]}
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
  const postSlug = (params?.slug as string[])?.join("/");

  const post = await getFileBySlug("docs", postSlug);

  return { props: { post } };
}

interface DocsProps {
  docs: FrontMatterProps[];
}

export default Docs;
