import List from "./docsSidebar";

export const findLinkByUrl = (url: string) => {
  const link = List.find((item) => item.url === url);

  if (link) {
    return link;
  }

  for (const item of List) {
    if (item.subLinks) {
      const childLink = item.subLinks.find((child) => child.url === url);
      if (childLink) {
        return childLink;
      }
    }
  }
  return null;
}