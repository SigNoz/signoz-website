import fs from "fs";
import path from "path";

const root = process.cwd();

export const getAuthors = () => {
  const authorPath = path.join(root, "data", "authors");
  const authorList = fs
    .readdirSync(authorPath)
    .map((filename) => path.parse(filename).name);
  return authorList;
};
