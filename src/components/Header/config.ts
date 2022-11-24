export const leftItems: Links[] = [
  // {
  //   name: "Home",
  //   path: "/",
  // },
  // {
  //   name: "Features",
  //   path: "/features",
  // },
  // {
  //   name: "Testimonials",
  //   path: "/testimonials",
  // },
  // {
  //   name: "FAQ",
  //   path: "/faq",
  // },
  {
    name: "Docs",
    path: "/docs",
  },
  {
    name: "Blog",
    path: "/blogs",
  },
  {
    name: "OpenTelemetry",
    path: "/opentelemetry",
  },
  {
    name: "Pricing",
    path: "/pricing",
  },
];

export const rightItems: Links[] = [
  {
    name: "Customer Stories",
    path: "/case-study/",
  },
  {
    name: "Slack",
    path: "https://signoz-community.slack.com/join/shared_invite/zt-lrjknbbp-J_mI13rlw8pGF4EWBnorJA#/shared-invite/email",
  },
  // {
  //   name: "Community",
  //   path: "/community",
  // },
];

export const headerElements = [...leftItems, ...rightItems];

interface Links {
  name: string;
  path: string;
}
