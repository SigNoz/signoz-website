import { SubLinks } from "./Link";

const getSubLinks = (section: string): SubLinks[] => {
  switch (section) {
    case "DOCS":
      return [
        {
          text: "Introduction",
          to: "/introduction",
        },
        {
          text: "Install",
          to: "/install",
        },
        {
          text: "Instrumentation",
          to: "/instrumentation",
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
          text: "Community",
          to: "https://signoz.io/community/",
        },
        {
          text: "Archive",
          to: "https://signoz.io/archive/",
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
          text: "OpenTelemetry",
          to: "/",
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
          to: "/",
        },
        {
          text: "Terms",
          to: "/",
        },
        {
          text: "Privacy",
          to: "/",
        },
      ];
    }

    default: {
      return [];
    }
  }
};

export default getSubLinks;
