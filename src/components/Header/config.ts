export const leftItems: Links[] = [
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
];

export const headerElements = [...leftItems, ...rightItems];

interface Links {
  name: string;
  path: string;
}
