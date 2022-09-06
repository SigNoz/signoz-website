import { FrontMatterProps, getAllFilesFrontMatter } from "lib/mdx";
import { NextPage } from "next";
import AllPost from "pages/AllPosts";

const AllPosts: NextPage<AllPostsProps> = ({
  posts,
}: AllPostsProps): JSX.Element => {
  return <AllPost posts={posts} />;
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blogs");

  return { props: { posts } };
}

interface AllPostsProps {
  posts: FrontMatterProps[];
}

export default AllPosts;
