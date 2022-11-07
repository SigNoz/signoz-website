import getAllDocsLinks from "./allLinks";
import allDocsLinks from "./docsSidebar";

const allList = getAllDocsLinks(allDocsLinks)

export const findDocsLinkByUrl = (url: string) => allList.find((link) => link.url === url);
