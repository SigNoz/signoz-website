export const leftItems: Links[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Features",
    path: "/features",
  },
  {
    name: "Testimonials",
    path: "/testimonials",
  },
  {
    name: "FAQ",
    path: "/faq",
  },
];

export const rightItems: Links[] = [
  {
    name: "Docs",
    path: "/docs",
  },
  {
    name: "Blog",
    path: "/blogs",
  },
  {
    name: "Community",
    path: "/community",
  },
];

export const headerElements = [...leftItems, ...rightItems];

interface Links {
  name: string;
  path: string;
}
