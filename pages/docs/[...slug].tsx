import { MDXLayoutRenderer } from "components/MDX";
import { TocHeadingProps } from "components/MDX/components/TOCInline";
import docsLinks from "lib/docs/docsSidebar";
import Layout from "container/Layout";
import { formatSlug, FrontMatterProps, getFileBySlug, getFiles } from "lib/mdx";
import { GetStaticPropsContext, NextPage } from "next";
import { findLinkByUrl } from "lib/docs/findLinkByUrl";

interface DocsProps {
  docs: FrontMatterProps[];
  post: {
    frontMatter: FrontMatterProps;
    mdxSource: string;
    toc: TocHeadingProps["toc"];
  };
  notFound: boolean;
}

export async function getStaticPaths() {
  const posts = getFiles("docs");
  const initialPaths: string[] = []

  const allLinks = docsLinks.reduce((acc, curr) => {
    acc.push(curr.url)
    if (curr.subLinks) {
      curr.subLinks.forEach((subLink) => {
        acc.push(subLink.url)
      })
    }
    return acc
  }, initialPaths);

  return {
    paths: allLinks.map(e => `/docs${e}`),
    fallback: false,
  };
}

const Docs: NextPage<DocsProps> = (props: DocsProps): JSX.Element => {
  const { post, notFound } = props;

  const { frontMatter, mdxSource, toc } = post;

  if (notFound) {
    return (
      <div>
        <h1>404 - Page Not Found</h1>
      </div>
    );
  }

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

  const postUrl = findLinkByUrl(`/${postSlug}`);

  if (!postSlug) {
    return {
      props: {
        post: null,
        notFound: true,
      }
    }
  }


  const post = await getFileBySlug("docs", postUrl?.link || "");

  return { props: { post, notFound: false } };
}

interface DocsProps {
  docs: FrontMatterProps[];
}

export default Docs;
