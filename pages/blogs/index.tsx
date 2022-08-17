import OpenTelementryLiveClasses from "components/OpenTelementryLiveClasses";
import OpentelementryImplementation from "container/AllBlogs/OpentelementryImplementation";
import SectionBlogs from "container/AllBlogs/SectionBlogs";
import MostRecentPost from "container/AllBlogs/MostRecentPost";
import HeroSection from "container/AllBlogs/HeroSection";
import { FrontMatterProps, getAllFilesFrontMatter } from "lib/mdx";
import { NextPage } from "next";
import { getSectionPosts } from "lib/frontmatterToBlogData";

const AllBlogs: NextPage<AllBlogsProps> = (
  props: AllBlogsProps
): JSX.Element => {
  const { posts } = props;
  const toolsPost = getSectionPosts(posts, "tools");
  const techinalPost = getSectionPosts(posts, "technical");
  const productPost = getSectionPosts(posts, "product");
  const mostRecentPost = getSectionPosts(posts, "most-recent-post");
  const heroPost = getSectionPosts(posts, "hero-section");
  const openTelementryLiveClasses = getSectionPosts(
    posts,
    "open-telementry-implementations"
  );

  return (
    <>
      {heroPost.length > 0 && <HeroSection data={heroPost} />}
      <div className="bg-[#E5E5E5]">
        <div className="max-w-[1189px] m-auto pt-10 md:py-20">
          {mostRecentPost.length > 0 && (
            <MostRecentPost data={mostRecentPost} />
          )}
          <OpenTelementryLiveClasses />
        </div>
      </div>
      {openTelementryLiveClasses.length > 0 && (
        <div className="max-w-[1189px] m-auto">
          <OpentelementryImplementation data={openTelementryLiveClasses} />
        </div>
      )}

      {productPost.length > 0 && (
        <SectionBlogs data={productPost} section="product" />
      )}
      {techinalPost.length > 0 && (
        <SectionBlogs data={techinalPost} section="technical" />
      )}
      {toolsPost.length > 0 && (
        <SectionBlogs data={toolsPost} section="tools" />
      )}
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
