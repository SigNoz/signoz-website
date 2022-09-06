import GridBlogs from "components/GridBlogs";
import { FrontMatterProps } from "lib/mdx";

const AllPost = ({ posts }: AllPostProps): JSX.Element => {
  return (
    <div className="md:max-w-[1240px] m-auto p-4">
      <h1 className="text-4xl mb-6 font-bold">{`All Posts :`}</h1>

      <GridBlogs posts={posts} />
    </div>
  );
};

interface AllPostProps {
  posts: FrontMatterProps[];
}

export default AllPost;
