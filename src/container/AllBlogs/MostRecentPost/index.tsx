import BlogCard, { BlogCardProps } from "components/BlogCard";
import { useIsDesktop } from "hooks/useDeviceType";
import { useSectionScroll } from "hooks/useSectionScroll";
import { useCallback, useState } from "react";
import SectionHeader from "../SectionHeader";

const MostRecentPost = (props: MostRecentPostProps): JSX.Element => {
  const onClickViewAllPost = useCallback(() => {
    console.log("asd");
  }, []);

  const isDesktop = useIsDesktop();

  const [currentSelected, setCurrentSelected] = useState<number>(0);

  const section = "most-recent-post";

  const Element = useSectionScroll({
    currentSelected,
    section: section,
    setCurrentSelected,
  });

  const blogs: BlogCardProps[] = [...props.data];

  const firstBlogs = blogs[0];
  const rest = blogs.slice(1);

  return (
    <>
      <SectionHeader
        section="most-recent-post"
        onClickViewAllPost={onClickViewAllPost}
      />

      <div
        id={section + "scrollContainer"}
        className="overflow-x-scroll flex md:flex-row gap-4 px-4 md:px-0"
      >
        <div className="flex-2">
          {firstBlogs && (
            <BlogCard
              cardStyle={{ background: "none", boxShadow: "none" }}
              {...firstBlogs}
            />
          )}
        </div>
        <div className="flex-1 gap-4 flex md:flex-col">
          {rest.map((blog) => (
            <BlogCard
              cardStyle={{ background: "none", boxShadow: "none" }}
              key={blog.title}
              {...blog}
            />
          ))}
        </div>
      </div>

      {!isDesktop && Element}
    </>
  );
};

interface MostRecentPostProps {
  data: BlogCardProps[];
}

export default MostRecentPost;
