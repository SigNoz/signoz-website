import { useRouter } from "next/router";
import { useCallback } from "react";

interface BlogTagProps {
  tags: string[];
}

const BlogTag = ({ tags }: BlogTagProps): JSX.Element => {
  const { push } = useRouter();

  const onTagClickHandler = useCallback(
    (tag: string) => () => {
      push("/tags/[tag]", `/tags/${tag}`, { shallow: true, scroll: false });
    },
    [push]
  );

const renderTagName = useCallback((tag: string) => tag.replace(/-/g, " "), []);

return (
  <div className="flex gap-2 md:gap-4 md:mx-0 mx-4 mt-4 flex-wrap overflow-x-auto">
    {tags.map((tag) => {
      return (
        <div
          className="py-2 cursor-pointer rounded-[50px] px-3 font-openSans font-normal text-base text-white bg-signoz-primary capitalize"
          key={tag}
          onClick={onTagClickHandler(tag)}
        >
          {renderTagName(tag)}
        </div>
      );
    })}
  </div>
);
};

export default BlogTag;
