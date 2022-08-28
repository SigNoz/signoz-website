import Head from "next/head";
import { useRouter } from "next/router";

const BlogsSEO = ({
  title,
  description,
  keywords = [],
  coverImage,
  publishedTime,
  authorName,
  tags = [],
}: BlogsSEOProps): JSX.Element => {
  const currentHost = process.env.NEXT_PUBLIC_PATH;
  const { asPath } = useRouter();

  const url = `${currentHost}${asPath}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content={description} />
      <meta name="twitter:image" content={coverImage} />
      <meta name="docsearch:language" content="en" />
      <meta name="description" content={description} />

      <meta name="og:url" content={url} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="article" />
      <meta name="og:image" content={coverImage} />
      <meta name="og:image:alt" content={description} />
      <meta name="og:image:secure_url" content={coverImage} />

      <meta name="keywords" content={keywords.join(",")} />
      <meta
        name="article:published_time"
        content={new Date(publishedTime || "").toISOString()}
      />
      <meta name="article:author" content={authorName} />
      <meta name="article:section" content="Blog" />
      <meta name="article:tag" content={tags.join(",")} />
    </Head>
  );
};

interface BlogsSEOProps {
  title: string;
  description: string;
  keywords: string[];
  coverImage: string;
  publishedTime: string | null;
  authorName: string;
  tags: string[];
}

export default BlogsSEO;
