import BlogCard, { BlogCardProps } from "components/BlogCard";
import { useIsDesktop } from "hooks/useDeviceType";
import { useCallback, useState } from "react";
import SectionHeader from "../SectionHeader";
import { useSectionScroll } from "hooks/useSectionScroll";

const SectionBlogs = ({ section, data }: SectionBlogsProps): JSX.Element => {
  const isDesktop = useIsDesktop();
  const [currentSelected, setCurrentSelected] = useState(0);

  const onClickViewAllPost = useCallback(() => {
    console.log("asd");
  }, []);

  const Element = useSectionScroll({
    currentSelected,
    section,
    setCurrentSelected,
  });

  return (
    <div className="max-w-[1189px] m-auto mb-20 md:mb-0">
      <SectionHeader
        {...{
          onClickViewAllPost,
          section,
        }}
      />
      <div
        id={section + "scrollContainer"}
        className="py-4 px-4 md:px-0 flex gap-6 overflow-x-scroll pb-6"
      >
        {data.map((post: BlogCardProps, index: number) => (
          <BlogCard key={JSON.stringify(post)} {...post} />
        ))}
      </div>

      {!isDesktop && Element}
    </div>
  );
};

interface SectionBlogsProps {
  section: BlogCardProps["tags"];
  data: BlogCardProps[];
}

export default SectionBlogs;
