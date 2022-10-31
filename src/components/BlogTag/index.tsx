import { AllTags } from "lib/frontmatterToBlogData";
import { displayTag } from "lib/tag";
import Link from "next/link";

interface BlogTagProps {
  tags: string[];
}

const BlogTag = ({ tags }: BlogTagProps): JSX.Element => {
  return (
    <div className="flex gap-2 md:gap-4 md:mx-0 mx-4 mt-4 flex-wrap overflow-x-auto">
      {tags.map((tag) => {
        const values = displayTag[tag as AllTags]
        return (
          <Link
            key={values}
            href="/tags/[tag]"
            as={`/tags/${tag}`}
            prefetch

            passHref
            aria-label={values}
          >
            <a className="py-2 cursor-pointer rounded-[50px] px-3 font-openSans font-normal text-base text-white bg-signoz-primary text-ellipsis overflow-hidden whitespace-nowrap max-w-[200px]">
              {values}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default BlogTag;
