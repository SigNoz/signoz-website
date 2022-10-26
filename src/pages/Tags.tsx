import { TagsPage } from "../../pages/tags/[tag]";
import { useMemo } from "react";
import GridBlogs from "components/GridBlogs";

const Tags = ({ posts, tag }: TagsPage) => {
  return (
    <div className="md:max-w-[1440px] m-auto p-4">
      <h1 className="text-4xl mb-6 font-bold">{`${tag} :`}</h1>

      <GridBlogs posts={posts} tagToRender={tag} />
    </div>
  );
};

export default Tags;
