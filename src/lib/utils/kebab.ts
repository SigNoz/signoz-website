import gitubSlugger from "github-slugger";

const kebabCase = (str: string) => gitubSlugger.slug(str);

export default kebabCase;
