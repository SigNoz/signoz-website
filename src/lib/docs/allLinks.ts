import { DocsLinks } from "container/DocsSidebar";

export const getAllDocsLinks = (docs: DocsLinks[]) => {
  let links: DocsLinks[] = [];
  docs.forEach((doc) => {
    links.push(doc);
    if (doc.subLinks) {
      links = [...links, ...getAllDocsLinks(doc.subLinks)];
    }
  });
  return links;
};

export default getAllDocsLinks;