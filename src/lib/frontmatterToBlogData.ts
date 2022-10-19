import { BlogCardProps } from "components/BlogCard";
import { FrontMatterProps } from "./mdx";
type AllTags = BlogCardProps["tags"];

export const blogsTagtoTagsMapping: Record<AllTags, string> = {
  tools: "tools_comparison",
  technical: "technical",
  "hero-section": "hero-section",
  "most-recent-post": "most-recent-post",
  "open-telementry-implementations": "open-telementry-implementations",
  product: "product",
  "blog-recent-post": "blog-recent-post",
  "product-updates":"product-updates",
  "observability":"observability",
  "opentelemetry":"opentelemetry"
};

const isTagsMapping = (tag: string): tag is AllTags => {
  return Object.keys(blogsTagtoTagsMapping).includes(tag);
};

const extractDate = (date: string | null): Date => {
  if (date === null) {
    return new Date();
  }

  return new Date(date);
};

export const getBlogCard = (
  post: FrontMatterProps,
  layout?: BlogCardProps["layout"]
): BlogCardProps => {
  const {
    title,
    date,
    tags = [],
    description = "",
    time = { minutes: 0 },
    slug,
  } = post;

  const tagsMapped = tags.filter((tag) => isTagsMapping(tag));

  const tag = tagsMapped[0];

  return {
    title,
    tags: tag as AllTags,
    description,
    timeToReadInMinutes: time?.minutes || 0,
    date: extractDate(date),
    layout,
    slug: slug,
  };
};

export const getSectionPosts = (posts: FrontMatterProps[], allTags: AllTags) =>
  posts
    .filter((post) => post.tags.find((tag) => tag === allTags))
    .filter((_, index) => index < 3)
    .map((post) => getBlogCard(post));
