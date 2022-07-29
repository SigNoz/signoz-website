import OpenTelementryLiveClasses from "components/OpenTelementryLiveClasses";
import FAQ from "container/FAQ";
import GetLockedWithVendors from "container/GetLockedWithVendors";
import WhySignozMore from "container/WhySignozMore";
import HeroSection from "container/HeroSection";
import TrustedTeams from "container/TrustedTeams";
import Tutorials from "container/Tutorials";
import LatestBlogPosts from "container/LatestBlogPost";

const HomePage = () => {
  return (
    <>
      <div className="w-[95%] m-auto mb-16">
        <HeroSection />
      </div>
      <TrustedTeams />
      <WhySignozMore />
      <div className="w-[95%] m-auto">
        <div className="mt-16 mb-16">
          <Tutorials />
        </div>
        <LatestBlogPosts />
        <div className="mb-16">
          <GetLockedWithVendors />
        </div>
        <OpenTelementryLiveClasses />
        <div className="mt-16">
          <FAQ />
        </div>
      </div>
    </>
  );
};

export default HomePage;
