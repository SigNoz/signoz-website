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
          text: "Contributing",
          to: "/contributing",
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
