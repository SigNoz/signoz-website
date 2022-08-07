import { BlogCardProps } from "components/BlogCard";
import { getTags } from "components/BlogCard/utils";
import Title from "components/Title";

const SectionHeader = ({
  section,
  onClickViewAllPost,
}: SectionHeaderProps): JSX.Element => {
  return (
    <div className="py-4 px-4 md:px-0 flex md:justify-between md:flex-row flex-col">
      <Title>{getTags(section)}</Title>
      <button
        onClick={onClickViewAllPost}
        className="bg-none text-signoz-primary text-base text-left font-semibold"
      >
        View all posts
      </button>
    </div>
  );
};

interface SectionHeaderProps {
  onClickViewAllPost: VoidFunction;
  section: BlogCardProps["tags"];
}

export default SectionHeader;
