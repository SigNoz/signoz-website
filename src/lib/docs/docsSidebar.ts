import { DocsLinks } from "container/DocsSidebar";

const docsLinks: DocsLinks[] = [
  {
    link: "/introduction",
    url: "/introduction",
    name: "Introduction",
  },
  {
    link: "/install",
    url: "/install",
    name: "Install",
    subLinks: [
      {
        link: "/install/docker",
        url: "/install/docker2",
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
    name: "Instrumentation",
    url: "/instrumentation_app",
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
