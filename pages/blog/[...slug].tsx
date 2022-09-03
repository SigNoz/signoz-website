import {
  formatSlug,
  FrontMatterProps,
  getAllFilesFrontMatter,
  getFileBySlug,
  getFiles,
} from "lib/mdx";
import fs from "fs";
import { generateRss } from "lib/generateRss";
import { ReadTimeResults } from "reading-time";
import { NextPage, GetStaticPropsContext } from "next";
import { MDXLayoutRenderer } from "components/MDX";
import Layout from "container/Layout";
import { TocHeadingProps } from "components/MDX/components/TOCInline";
import SectionBlogs from "container/AllBlogs/SectionBlogs";
import { getBlogCard } from "lib/frontmatterToBlogData";
const ShareIcons = dynamic(() => import("components/ShareIcons"), {
  ssr: false,
});
import { ShareIcon } from "components/ShareIcons";
import { useRouter } from "next/router";
import BlogTag from "components/BlogTag";
import BlogsSEO from "components/BlogSEO";
import dynamic from "next/dynamic";
const PropertyControlledComponent = dynamic(
  () => import("components/PropertyControllComponent"),
  { ssr: false }
);

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
  if (allPosts.length > 0) {
    const rss = generateRss(allPosts);
    fs.writeFileSync("./public/feed.xml", rss);
  }

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
  const { asPath } = useRouter();

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
      url: `https://twitter.com/intent/tweet?text=${asPath}`,
    },
    {
      type: "facebook",
      url: `https://twitter.com/intent/tweet?text=${asPath}`,
    },
    {
      type: "linkedin",
      url: `https://twitter.com/intent/tweet?text=${asPath}`,
    },
  ];

  const isBlogInDraft = frontMatter.draft === true;

  return (
    <>
      <BlogsSEO
        {...{
          authorName: authorDetails[0].name,
          coverImage: frontMatter.image,
          description: frontMatter.description,
          title: frontMatter.title,
          date: frontMatter.date,
          tags: frontMatter.tags,
          keywords: frontMatter.keywords,
          publishedTime: frontMatter.date,
        }}
      />
      <PropertyControlledComponent controllerProperty={!isBlogInDraft}>
        <>
          <div className="flex flex-col md:flex-row m-auto max-w-[1240px]">
            <div>
              <Layout
                toc={toc}
                frontMatter={frontMatter}
                authorDetails={authorDetails}
                docsLinks={[]}
                type="blogs"
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
            <div className="flex flex-col md:ml-4 md:w-[30%] w-full">
              <ShareIcons shareIcons={shareIcons} />

              <BlogTag tags={frontMatter.tags} />
            </div>
          </div>
          <div className="bg-recommended-postw">
            <SectionBlogs section="blog-recent-post" data={recentBlogs} />
          </div>
        </>
      </PropertyControlledComponent>

      <PropertyControlledComponent controllerProperty={isBlogInDraft}>
        <div className="mt-24 text-center">
          <span role="img" aria-label="roadwork sign">
            🚧
          </span>
        </div>
      </PropertyControlledComponent>
    </>
  );
};

export default Blogs;
