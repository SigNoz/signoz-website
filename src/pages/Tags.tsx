import { TagsPage } from "../../pages/tags/[tag]";
import GridBlogs from "components/GridBlogs";
import { displayTag } from "lib/tag";
import { AllTags } from "lib/frontmatterToBlogData";

const Tags = ({ posts, tag }: TagsPage) => (
  <div className="md:max-w-[1240px] m-auto p-4">
    <h1 className="text-4xl mb-6 font-bold">{`${
      displayTag[tag as AllTags]
    } :`}</h1>
    <GridBlogs posts={posts} tagToRender={tag} />
  </div>
);

export default Tags;
