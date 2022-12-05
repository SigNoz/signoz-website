export const Faqs = [
  {
    question: "Do you offer enterprise support plans?",
    answer:
      "Yes, feel free to reach out to us on <a mailto='hello@signoz.io'>hello@signoz.io</a>, if you need a dedicated support plan or paid support for setting your initial SigNoz setup",
  },
  // {
  //   question: "Who should use Enterprise plans?",
  //   answer:
  //     "Teams which need enterprise support or features like SSO, Audit logs, etc. may find our enterprise plans valuable",
  // },
];

interface Faqs {
  question: string;
  answer: string | HTMLElement;
}
