import OpenTelementryLiveClasses from "components/OpenTelementryLiveClasses";
import FAQ from "container/FAQ";
import GetLockedWithVendors from "container/GetLockedWithVendors";
import WhySignozMore from "container/WhySignozMore";
import HeroSection from "container/HeroSection";
import TrustedTeams from "container/TrustedTeams";
import Tutorials from "container/Tutorials";
import LatestBlogPosts from "container/LatestBlogPost";
import ReadAbout from "container/ReadAbout";
import SignozFeedback from "container/SignozFeedback";
import BlogsSEO from "components/BlogSEO";

const HomePage = () => {
  return (
    <>
      <BlogsSEO
        authorName=""
        coverImage=""
        description=""
        keywords={[]}
        publishedTime={new Date().toString()}
        tags={[]}
        title="Open source APM | SigNoz"
      />
      <div className="w-[95%] m-auto mb-16">
        <HeroSection />
      </div>
      <TrustedTeams />
      <WhySignozMore />
      <div className="w-[95%] m-auto">
        <div className="mt-16 mb-16">
          <ReadAbout />
        </div>
        <div className="mt-16 mb-16">
          <Tutorials />
        </div>
      </div>
      <SignozFeedback />
      <div className="w-[95%] m-auto">
        <LatestBlogPosts />
        <div className="mb-16 mt-16">
          <GetLockedWithVendors />
        </div>
        <div className="md:max-w-5xl m-auto">
          <OpenTelementryLiveClasses />
        </div>
        <div className="mt-16">
          <FAQ />
        </div>
      </div>
    </>
  );
};

export default HomePage;
