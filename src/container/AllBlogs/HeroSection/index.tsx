import { BlogCardProps } from "components/BlogCard";
import { getBlogFooter } from "components/BlogCard/utils";
import Title from "components/Title";
import { useSectionScroll } from "hooks/useSectionScroll";
import NextImage from "next/image";
import { useMemo, useState } from "react";
import AuthorBy from "components/AuthorBy";
import { useIsDesktop } from "hooks/useDeviceType";
import { useInterval } from "react-use";
import SearchBar from "../SearchBar";
import cx from "classnames";

const HeroSection = (props: HeroSectionProps) => {
  const isDesktop = useIsDesktop();

  const content: BlogCardProps[] = [...props.data];
  const [currentSelected, setCurrentSelected] = useState(0);
  const section = "hero-section";

  useInterval(() => {
    setCurrentSelected((prev) => {
      if (prev === content.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  }, 5000);

  const Element = useSectionScroll({
    currentSelected,
    section,
    setCurrentSelected,
    style: { justifyContent: isDesktop ? "flex-start" : "center" },
  });

  const selectedBlog = content[currentSelected];
  const dateToRender = useMemo(
    () =>
      getBlogFooter(
        selectedBlog.date || new Date(),
        selectedBlog.timeToReadInMinutes
      ),
    [selectedBlog]
  );

  return (
    <div className="flex relative flex-col md:flex-row">
      <div className="flex-1 order-1 h-full md:order-2">
        <NextImage
          src={"/blogs/hero-section-1.png"}
          layout="responsive"
          width={403}
          height={300}
          objectFit="cover"
          objectPosition={"center"}
          priority
        />
      </div>
      <div
        id={section + "scrollContainer"}
        className={cx(
          "flex-1 bg-signoz-medium p-4 md:pl-36 md:pt-8 order-2 md:order-1",
          {
            "pb-10": !isDesktop,
          }
        )}
      >
        <Title className="text-white">{selectedBlog.title}</Title>

        {selectedBlog.description && (
          <div className="font-openSans font-light text-base leading-6 text-signoz-light mt-4">
            {selectedBlog.description}
          </div>
        )}

        <div className="text-signoz-secondary-light font-openSans text-xs font-normal leading-[18px] mt-4">
          {dateToRender}
        </div>
        <div className="mt-4">
          <AuthorBy
            avatar="/images/authors/user1.jpg"
            name="Chenna Raidu D"
            position="SigNoz Community"
            nameClassName="font-medium text-white"
            positionClassName="text-signoz-secondary-light"
          />
        </div>
        <div className="order-3 mt-6">{Element}</div>
      </div>
      <SearchBar />
    </div>
  );
};

interface HeroSectionProps {
  data: BlogCardProps[];
}

export default HeroSection;
