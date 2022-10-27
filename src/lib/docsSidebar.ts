import { DocsLinks } from "container/DocsSidebar";

const docsLinks: DocsLinks[] = [
  {
    link: "/introduction",
    name: "Introduction",
    subLinks: [
      {
        link: "/install",
        name: "Install",
        subLinks: [
          {
            link: "/docker",
            name: "Docker Standalone",
            subLinks: [],
          },
          {
            link: "/docker-swarm",
            name: "Docker Swarm",
            subLinks: [],
          },
        ],
      },
    ],
  },
  {
    link: "/architecture",
    name: "Architecture",
    subLinks: [],
  },
  {
    link: "/faqs",
    name: "FAQs",
    subLinks: [
      {
        link: "/product",
        name: "Product - FAQs",
        subLinks: [],
      },
      {
        link: "/troubleshooting",
        name: "Troubleshooting - FAQs",
        subLinks: [],
      },
      {
        link: "/instrumentation",
        name: "Instrumentation - FAQs",
        subLinks: [],
      },
      {
        link: "/installation",
        name: "Installation - FAQs",
        subLinks: [],
      },
    ]
  }
];

export default docsLinks;
