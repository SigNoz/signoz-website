import { TagsPage } from "../../pages/tags/[tag]";
import BlogCard from "components/BlogCard";
import { blogsTagtoTagsMapping, getBlogCard } from "lib/frontmatterToBlogData";
import { useMemo } from "react";

const Tags = ({ posts, tag }: TagsPage) => {
  const tags = useMemo(
    () =>
      tag
        .split("_")
        .map((e) => e[0].toUpperCase() + e.slice(1))
        .join(" "),
    [tag]
  );

  const tagtomap = Object.entries(blogsTagtoTagsMapping).filter(
    ([key, value]) => {
      if (value === tag) {
        return key;
      }
      return false;
    }
  );

  const tagToRender = ((tagtomap || [])[0] || [])[0] || "";

  return (
    <div className="md:max-w-[1440px] m-auto p-4">
      <h1 className="text-4xl mb-6 font-bold">{`${tags} :`}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {posts.map((post) => (
          <div key={post.title}>
            <BlogCard
              cardStyle={{ height: "100%" }}
              {...getBlogCard({
                ...post,
                tags: [tagToRender],
              })}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tags;
