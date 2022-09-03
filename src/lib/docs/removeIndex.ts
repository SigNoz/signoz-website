export const removeIndexFromSlug = (slugs: string[]): string[] => {
  return slugs.filter((slug) => !slug.includes("index"));
};
