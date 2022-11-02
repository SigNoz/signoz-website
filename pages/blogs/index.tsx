import OpenTelementryLiveClasses from "components/OpenTelementryLiveClasses";
import OpentelementryImplementation from "container/AllBlogs/OpentelementryImplementation";
import SectionBlogs from "container/AllBlogs/SectionBlogs";
import MostRecentPost from "container/AllBlogs/MostRecentPost";
import HeroSection from "container/AllBlogs/HeroSection";
import { FrontMatterProps, getAllFilesFrontMatter } from "lib/mdx";
import { NextPage } from "next";
import { getSectionPosts } from "lib/frontmatterToBlogData";
import dynamic from "next/dynamic";
import { AuthorDetails } from "../blog/[...slug]";
import Head from "next/head";
const PropertyControlledComponent = dynamic(
  () => import("components/PropertyControllComponent"),
  {
    ssr: false,
  }
);

const AllBlogs: NextPage<AllBlogsProps> = (
  props: AllBlogsProps
): JSX.Element => {
  const { posts, allAuthors } = props;

  const toolsPost = getSectionPosts(posts, "tools-comparison");
  const techinalPost = getSectionPosts(posts, "tech-resources");
  const productPost = getSectionPosts(posts, "product-updates");
  const mostRecentPost = getSectionPosts(posts, "most-recent-post");
  const heroPost = getSectionPosts(posts, "hero-section");
  const openTelementryLiveClasses = getSectionPosts(
    posts,
    "open-telementry-implementations"
  );

  return (
    <>
      <Head>
        <title>SigNoz Blog</title>
      </Head>
      <PropertyControlledComponent controllerProperty={heroPost.length > 0}>
        <HeroSection allAuthors={allAuthors} data={heroPost} />
      </PropertyControlledComponent>

      <div className="bg-[#E5E5E5]">
        <div className="max-w-[1189px] m-auto pt-10 md:py-20">
          <PropertyControlledComponent
            controllerProperty={mostRecentPost.length > 0}
          >
            <MostRecentPost data={mostRecentPost} />
          </PropertyControlledComponent>
          <OpenTelementryLiveClasses />
        </div>
      </div>

      <PropertyControlledComponent
        controllerProperty={openTelementryLiveClasses.length > 0}
      >
        <div className="max-w-[1189px] m-auto">
          <OpentelementryImplementation data={openTelementryLiveClasses} />
        </div>
      </PropertyControlledComponent>

      <PropertyControlledComponent controllerProperty={productPost.length > 0}>
        <SectionBlogs data={productPost} section="product" />
      </PropertyControlledComponent>

      <PropertyControlledComponent controllerProperty={techinalPost.length > 0}>
        <SectionBlogs data={techinalPost} section="technical" />
      </PropertyControlledComponent>
      <PropertyControlledComponent controllerProperty={toolsPost.length > 0}>
        <SectionBlogs data={toolsPost} section="tools" />
      </PropertyControlledComponent>
    </>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blogs");
  const allAuthors = await getAllFilesFrontMatter("authors");

  return { props: { posts, allAuthors } };
}

interface AllBlogsProps {
  posts: FrontMatterProps[];
  allAuthors: AuthorDetails[];
}

export default AllBlogs;
