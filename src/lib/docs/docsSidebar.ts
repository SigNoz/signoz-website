import { DocsLinks } from "container/DocsSidebar";

const docsLinks: DocsLinks[] = [
  {
    link: "/introduction",
    url: "/introduction",
    name: "Introduction",
  },
  {
    link: "/shared_comp_demo",
    url: "/shared_comp",
    name: "Shared Comp",
  },

  {
    link: "/install",
    url: "/install",
    name: "Install",
    subLinks: [
      {
        link: "/install/docker",
        url: "/install/docker",
        name: "Docker Standalone",
      },
      {
        link: "/install/docker-swarm",
        name: "Docker Swarm",
        url: "/install/docker-swarm",
      },
    ],
  },
  {
    link: "/instrumentation",
    url: "/instrumentation",
    name: "Instrumentation",
    subLinks: [
      {
        link: "/instrumentation/overview",
        name: "Overview",
        url: "/instrumentation/overview",
      },
    ],
  },
];

export default docsLinks;
