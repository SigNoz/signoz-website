import { BlogCardProps } from "components/BlogCard";
import { FrontMatterProps } from "./mdx";
export type AllTags = BlogCardProps["tags"];

export const blogsTagtoTagsMapping: Record<AllTags, string> = {
  tools: "tools_comparison",
  technical: "technical",
  "hero-section": "hero-section",
  "most-recent-post": "most-recent-post",
  "open-telementry-implementations": "open-telementry-implementations",
  product: "product",
  "blog-recent-post": "blog-recent-post",
  "product-updates": "product-updates",
  observability: "observability",
  "tech-resources": "tech-resources",
  "dot-net": "dot-net",
  apm: "apm",
  community: "community",
  "database-monitoring": "database-monitoring",
  "distributed-tracing": "distributed-tracing",
  docker: "docker",
  "elixir-erlang": "elixir-erlang",
  "go-golang": "go-golang",
  jaeger: "jaeger",
  java: "java",
  javascript: "javascript",
  "open-source": "open-source",
  "opentelemetry-instrumentation": "opentelemetry-instrumentation",
  php: "php",
  prometheus: "prometheus",
  python: "python",
  ruby: "ruby",
  rust: "rust",
  security: "security",
  signoz: "signoz",
  talks: "talks",
  "tech-tutorial": "tech-tutorial",
  "tools-comparison": "tools-comparison",
  opentelemetry: "opentelemetry",
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
    authors,
  } = post;

  return {
    title,
    tags: tags[0] as AllTags,
    description,
    timeToReadInMinutes: time?.minutes || 0,
    date: extractDate(date),
    layout,
    slug: slug,
    author: authors,
    coverImage: post.image,
  };
};

export const getSectionPosts = (posts: FrontMatterProps[], allTags: AllTags) =>
  posts
    .filter((post) => post.tags.find((tag) => tag === allTags))
    .filter((_, index) => index < 3)
    .map((post) => getBlogCard(post));
