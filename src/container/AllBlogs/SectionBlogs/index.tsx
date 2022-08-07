import BlogCard, { BlogCardProps } from "components/BlogCard";
import { useIsDesktop } from "hooks/useDeviceType";
import { useCallback, useState } from "react";
import SectionHeader from "../SectionHeader";
import { useSectionScroll } from "hooks/useSectionScroll";

const SectionBlogs = ({ section }: SectionBlogsProps): JSX.Element => {
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
    <div className="max-w-[1189px] m-auto">
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
        <BlogCard
          title="Latest top 11 distributed tracing tools [perfect for microservices]"
          tags={section}
          date={new Date()}
          timeToReadInMinutes={3}
        />
        <BlogCard
          title="Latest top 11 distributed tracing tools [perfect for microservices]"
          tags={section}
          date={new Date()}
          timeToReadInMinutes={3}
        />
        <BlogCard
          title="Latest top 11 distributed tracing tools [perfect for microservices]"
          tags={section}
          date={new Date()}
          timeToReadInMinutes={3}
        />
      </div>
      {isDesktop && Element}
    </div>
  );
};

interface SectionBlogsProps {
  section: BlogCardProps["tags"];
}

export default SectionBlogs;
