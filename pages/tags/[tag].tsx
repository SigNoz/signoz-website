import { FrontMatterProps, getAllFilesFrontMatter, getAllTags } from "lib/mdx";
import { GetStaticPropsContext, NextPage } from "next";
import { generateRss } from "lib/generateRss";
import fs from "fs";
import kebabCase from "lib/utils/kebab";
import path from "path";
import Tags from "pages/Tags";
const root = process.cwd();

export async function getStaticPaths() {
  const tags = await getAllTags("blogs");

  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const allPosts = await getAllFilesFrontMatter("blogs");
  const tag = params?.tag as string;

  const filteredPosts = allPosts.filter(
    (post) =>
      post.draft !== true && post.tags.map((t) => kebabCase(t)).includes(tag)
  );

  // rss
  if (filteredPosts.length > 0) {
    const rss = generateRss(filteredPosts, `tags/${tag}/feed.xml`);
    const rssPath = path.join(root, "public", "tags", tag);
    fs.mkdirSync(rssPath, { recursive: true });
    fs.writeFileSync(path.join(rssPath, "feed.xml"), rss);
  }

  return { props: { posts: filteredPosts, tag: tag } };
}

export interface TagsPage {
  posts: FrontMatterProps[];
  tag: string;
}

const TagsPage: NextPage<TagsPage> = (props: TagsPage): JSX.Element => {
  return <Tags {...props} />;
};

export default TagsPage;
