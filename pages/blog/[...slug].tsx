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
  prev: null | FrontMatterProps;
  next: null | FrontMatterProps;
  post: FrontMatterProps;
  authorDetails: AuthorDetails[];
}

const Blogs: NextPage<BlogProps> = ({
  prev,
  next,
  post,
  authorDetails,
}: BlogProps) => {
  console.log({ prev, next, post, authorDetails });
  return <div>asd</div>;
};

export default Blogs;
