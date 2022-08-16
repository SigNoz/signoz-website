import OpenTelementryLiveClasses from "components/OpenTelementryLiveClasses";
import OpentelementryImplementation from "container/AllBlogs/OpentelementryImplementation";
import SectionBlogs from "container/AllBlogs/SectionBlogs";
import MostRecentPost from "container/AllBlogs/MostRecentPost";
import HeroSection from "container/AllBlogs/HeroSection";
import { FrontMatterProps, getAllFilesFrontMatter } from "lib/mdx";
import { NextPage } from "next";

const AllBlogs: NextPage<AllBlogsProps> = (
  props: AllBlogsProps
): JSX.Element => {
  console.log({ props });

  return (
    <>
      <HeroSection />
      <div className="bg-[#E5E5E5]">
        <div className="max-w-[1189px] m-auto pt-10 md:py-20">
          <MostRecentPost />
          <OpenTelementryLiveClasses />
        </div>
      </div>
      <div className="max-w-[1189px] m-auto">
        <OpentelementryImplementation />
      </div>
      <SectionBlogs section="product" />
      <SectionBlogs section="technical" />
      <SectionBlogs section="tools" />
    </>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blogs");

  return { props: { posts } };
}

interface AllBlogsProps {
  posts: FrontMatterProps[];
}

export default AllBlogs;
