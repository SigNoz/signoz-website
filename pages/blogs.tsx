import OpenTelementryLiveClasses from "components/OpenTelementryLiveClasses";
import OpentelementryImplementation from "container/AllBlogs/OpentelementryImplementation";
import SectionBlogs from "container/AllBlogs/SectionBlogs";
import MostRecentPost from "container/AllBlogs/MostRecentPost";
import HeroSection from "container/AllBlogs/HeroSection";

const AllBlogs = (): JSX.Element => {
  return (
    <>
      <HeroSection />
      <div className="bg-[#E5E5E5]">
        <div className="max-w-[1189px] m-auto md:py-20">
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

export default AllBlogs;
