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
];

export default docsLinks;
