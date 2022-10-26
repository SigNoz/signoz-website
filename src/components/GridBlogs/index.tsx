import BlogCard from "components/BlogCard";
import { getBlogCard } from "lib/frontmatterToBlogData";
import { FrontMatterProps } from "lib/mdx";

const GridBlogs = ({ posts, tagToRender }: GridBlogsProps): JSX.Element => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {posts.map((post) => (
      <div key={post.title}>
        <BlogCard
          cardStyle={{ height: "100%" }}
          {...getBlogCard({
            ...post,
            tags: tagToRender ? [tagToRender] : post.tags,
          })}
        />
      </div>
    ))}
  </div>
);

interface GridBlogsProps {
  posts: FrontMatterProps[];
  tagToRender?: string;
}

export default GridBlogs;
