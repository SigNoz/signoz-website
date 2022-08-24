import {
  formatSlug,
  FrontMatterProps,
  getAllFilesFrontMatter,
  getFileBySlug,
  getFiles,
} from "lib/mdx";
// import fs from "fs";
// import { generateRss } from "lib/generateRss";
import { ReadTimeResults } from "reading-time";
import { NextPage, GetStaticProps, GetStaticPropsContext } from "next";
import { MDXLayoutRenderer } from "components/MDX";
import Layout from "container/Layout";
import { TocHeadingProps } from "components/MDX/components/TOCInline";
import SectionBlogs from "container/AllBlogs/SectionBlogs";
import { getBlogCard } from "lib/frontmatterToBlogData";
import ShareIcons, { ShareIcon } from "components/ShareIcons";

export async function getStaticPaths() {
  const posts = getFiles("blogs");
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

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const postSlug = (params?.slug as string[])?.join("/");

  const allPosts = await getAllFilesFrontMatter("blogs");
  const postIndex = allPosts.findIndex(
    (post) => formatSlug(post.slug) === postSlug
  );

  const prev = allPosts[postIndex + 1] || null;
  const next = allPosts[postIndex - 1] || null;

  const post = await getFileBySlug("blogs", postSlug);

  const authorList: string[] = post.frontMatter.authors || ["default"];
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug("authors", author);
    return authorResults.frontMatter;
  });
  const authorDetails = await Promise.all(authorPromise);

  // rss
  // if (allPosts.length > 0) {
  //   const rss = generateRss(allPosts);
  //   fs.writeFileSync("./public/feed.xml", rss);
  // }

  return { props: { post, authorDetails, prev, next } };
}

export interface AuthorDetails {
  readingTime: ReadTimeResults;
  slug: string;
  fileName: string;
  name: string;
  avatar: string;
  occupation: string;
  company: string;
  twitter: string;
  linkedin: string;
  date: null | Date;
}

interface BlogProps {
  prev: FrontMatterProps;
  next: FrontMatterProps;
  post: {
    frontMatter: FrontMatterProps;
    mdxSource: string;
    toc: TocHeadingProps["toc"];
  };
  authorDetails: AuthorDetails[];
}

const Blogs: NextPage<BlogProps> = ({
  prev,
  next,
  post,
  authorDetails,
}: BlogProps) => {
  const { frontMatter, mdxSource, toc } = post;

  const allFrontMatterPosts = [{ ...frontMatter }];

  if (next !== null) {
    allFrontMatterPosts.push(next);
  }
  if (prev !== null) {
    allFrontMatterPosts.push(prev);
  }

  const recentBlogs = allFrontMatterPosts.map((frontMatter) =>
    getBlogCard(frontMatter)
  );

  const shareIcons: ShareIcon[] = [
    {
      type: "twitter",
      url: "https://twitter.com/intent/tweet?text=Hello%20world",
    },
    {
      type: "facebook",
      url: "https://twitter.com/intent/tweet?text=Hello%20world",
    },
    {
      type: "linkedin",
      url: "https://twitter.com/intent/tweet?text=Hello%20world",
    },
  ];

  return (
    <>
      {frontMatter.draft !== true ? (
        <>
          <div className="flex flex-col md:flex-row">
            <div>
              <Layout
                toc={toc}
                frontMatter={frontMatter}
                authorDetails={authorDetails}
              >
                <MDXLayoutRenderer
                  {...{
                    authorDetails,
                    frontmatter: frontMatter,
                    mdxSource,
                    next,
                    prev,
                    toc,
                  }}
                />
              </Layout>
            </div>
            <ShareIcons shareIcons={shareIcons} />
          </div>
          <div className="bg-recommended-postw">
            <SectionBlogs section="blog-recent-post" data={recentBlogs} />
          </div>
        </>
      ) : (
        <div className="mt-24 text-center">
          <span role="img" aria-label="roadwork sign">
            🚧
          </span>
        </div>
      )}
    </>
  );
};

export default Blogs;
