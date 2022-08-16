import { visit } from "unist-util-visit";
// @ts-ignore
import { slug } from "github-slugger";
import { toString } from "mdast-util-to-string";

export default function remarkTocHeadings(options: any) {
  return (tree: any) =>
    visit(tree, "heading", (node, index, parent) => {
      const textContent = toString(node);
      options.exportRef.push({
        value: textContent,
        url: "#" + slug(textContent),
        depth: node.depth,
      });
    });
}
