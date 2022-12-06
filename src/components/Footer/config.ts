import { SubLinks } from "./Link";

const getSubLinks = (section: string): SubLinks[] => {
  switch (section) {
    case "DOCS":
      return [
        {
          text: "Introduction",
          to: "/docs/introduction",
        },
        {
          text: "Install",
          to: "/docs/install",
        },
        {
          text: "Instrumentation",
          to: "/docs/instrumentation",
        },
      ];
    case "COMMUNITY": {
      return [
        {
          text: "Slack",
          to: "https://signoz-community.slack.com/join/shared_invite/zt-lrjknbbp-J_mI13rlw8pGF4EWBnorJA#/shared-invite/email",
        },
        {
          text: "Twitter",
          to: "https://twitter.com/SigNozHQ",
        },
        {
          text: "Support",
          to: "https://signoz.io/support/",
        },
        {
          text: "Learn",
          to: "https://signoz.io/learn/",
        },
        {
          text: "Community Archive",
          to: "https://signoz.io/community/",
        },
      ];
    }

    case "BLOGS": {
      return [
        {
          text: "SigNoz - A DataDog alternative",
          to: "/",
        },
        {
          text: "OpenTelemetry Collector Guide",
          to: "/blog/opentelemetry-collector-complete-guide/",
        },
      ];
    }

    case "MORE": {
      return [
        {
          text: "Technical Writer Program",
          to: "/",
        },
        {
          text: "About",
          to: "/about-us",
        },
        {
          text: "Terms",
          to: "/",
        },
        {
          text: "Privacy",
          to: "/privacy",
        },
      ];
    }

    default: {
      return [];
    }
  }
};

export default getSubLinks;
