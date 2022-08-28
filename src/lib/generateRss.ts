import { FrontMatterProps } from "./mdx";
import metaData from "./metaData";
import { escape } from "./utils/htmlParser";

const generateRssItem = (post: FrontMatterProps) => `
  <item>
    <guid>${metaData.siteUrl}/blog/${post.slug}</guid>
    <title>${escape(post.title)}</title>
    <link>${metaData.siteUrl}/blog/${post.slug}</link>
    ${
      post.description &&
      `<description>${escape(post.description)}</description>`
    }
    <pubDate>${new Date(post.date || "").toUTCString()}</pubDate>
    <author>${metaData.email} (${metaData.author})</author>
    ${
      post.tags &&
      post.tags.map((t: string) => `<category>${t}</category>`).join("")
    }
  </item>
`;

export const generateRss = (posts: FrontMatterProps[], page = "feed.xml") => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${escape(metaData.title)}</title>
      <link>${metaData.siteUrl}/blog</link>
      <description>${escape(metaData.description)}</description>
      <language>${metaData.language}</language>
      <managingEditor>${metaData.email} (${metaData.author})</managingEditor>
      <webMaster>${metaData.email} (${metaData.author})</webMaster>
      <lastBuildDate>${new Date(
        (posts[0] || {}).date || ""
      ).toUTCString()}</lastBuildDate>
      <atom:link href="${
        metaData.siteUrl
      }/${page}" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join("")}
    </channel>
  </rss>
`;
