import { DocsLinks } from "container/DocsSidebar";
import List from "./docsSidebar";

export const findLinkByUrl = (url: DocsLinks) => {
  const link = List.find((item) => item.url === url.url);

  if (link) {
    return link;
  }

  for (const item of List) {
    if (item.subLinks) {
      const link = item.subLinks.find((child) => child.url === url.url);

      if (link) {
        if (link.subLinks) {
          return link.subLinks[0];
        }
        return link;
      }
    }
  }
  return null;
};
