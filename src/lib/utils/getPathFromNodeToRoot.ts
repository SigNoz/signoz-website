import { DocsLinks } from "container/DocsSidebar";

export const getPathFromNodeToRoot = (
  tree: DocsLinks[],
  linkId: string
): string[] => {
  const spanPath: string[] = [];

  const traverse = (treeNode: DocsLinks): boolean => {
    if (!treeNode) {
      return false;
    }

    spanPath.push(treeNode.link);

    if (linkId === treeNode.link) {
      return true;
    }

    let foundInChild = false;

    treeNode?.subLinks?.forEach((childNode) => {
      if (traverse(childNode)) foundInChild = true;
    });

    if (!foundInChild) {
      spanPath.pop();
    }

    return foundInChild;
  };

  tree.forEach((node) => traverse(node));

  return spanPath;
};
