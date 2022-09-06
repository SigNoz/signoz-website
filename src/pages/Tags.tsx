import { TagsPage } from "../../pages/tags/[tag]";
import { blogsTagtoTagsMapping } from "lib/frontmatterToBlogData";
import { useMemo } from "react";
import GridBlogs from "components/GridBlogs";

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

      <GridBlogs posts={posts} tagToRender={tagToRender} />
    </div>
  );
};

export default Tags;
