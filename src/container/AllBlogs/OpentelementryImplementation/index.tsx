import BlogCard, { BlogCardProps } from "components/BlogCard";
import { useCallback, useState } from "react";
import SectionHeader from "../SectionHeader";
import NextImage from "next/image";
import { useIsDesktop } from "hooks/useDeviceType";
import { useSectionScroll } from "hooks/useSectionScroll";
import { useRouter } from "next/router";

const OpentelementryImplementation = ({
  data,
}: OpentelementryImplementationProps) => {
  const { push } = useRouter();

  const onClickViewAllPost = useCallback(() => {
    push("/tags/open-telementry-implementations", undefined, {
      shallow: true,
      scroll: false,
    });
  }, [push]);

  const isDesktop = useIsDesktop();
  const [currentSelected, setCurrentSelected] = useState<number>(0);

  const section = "open-telementry-implementations";

  const Element = useSectionScroll({
    currentSelected,
    section: section,
    setCurrentSelected,
  });

  return (
    <div>
      <SectionHeader
        section={section}
        onClickViewAllPost={onClickViewAllPost}
      />

      <div className="flex flex-col md:flex-row">
        <div
          id={section + "scrollContainer"}
          className="pr-4 flex overflow-x-scroll md:flex-col gap-6 md:gap-0 flex-1"
        >
          {data.map((blog) => (
            <BlogCard
              cardStyle={{
                boxShadow: "none",
                marginTop: "0rem",
                background: "none",
              }}
              layout={isDesktop ? "right" : "left"}
              key={blog.title}
              {...{ ...blog }}
            />
          ))}
        </div>

        {!isDesktop && Element}

        {isDesktop && (
          <div className="">
            <NextImage
              src={"/img/blog/open-telementry.png"}
              lang="en"
              layout="intrinsic"
              width={354}
              height={568}
            />
          </div>
        )}
      </div>
    </div>
  );
};

interface OpentelementryImplementationProps {
  data: BlogCardProps[];
}

export default OpentelementryImplementation;
