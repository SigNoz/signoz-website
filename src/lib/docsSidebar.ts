import { DocsLinks } from "container/DocsSidebar";

const docsLinks: DocsLinks[] = [
  {
    link: "/introduction",
    name: "Introduction",
    subLinks: [],
  },
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
      {
        link: "/kubernetes",
        name: "Kubernetes",
        subLinks: [
          {
            link: "/aws",
            name: "Deploying to AWS",
            subLinks: [],
          },
          {
            link: "/gcp",
            name: "Deploying to GCP",
            subLinks: [],
          },
          {
            link: "/others",
            name: "Deploying to Helm directly",
            subLinks: [],
          },
        ],
      },
    ]
  },
  {
    link: "/architecture",
    name: "Technical Architecture",
    subLinks: [],
  },
  {
    link: "/contributing",
    name: "Contributing Guidelines",
    subLinks: [],
  },
  {
    link: "/community",
    name: "Community",
    subLinks: [],
  },
  {
    link: "/roadmap",
    name: "Product Roadmap",
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
  },
  {
    link: "/tutorials",
    name: "Tutorials",
    subLinks: [
      {
        link: "/jvm-metrics",
        name: "Spring Boot JVM Metrics",
        subLinks: [],
      },
      {
        link: "/kubernetes-infra-metrics",
        name: "K8s Infra Metrics",
        subLinks: [],
      },
      {
        link: "/mongodb-metrics",
        name: "MongoDB Metrics",
        subLinks: [],
      },
      {
        link: "/instrumenting-angular-frontend",
        name: "Instrumenting Angular Frontend Web App",
        subLinks: [],
      },
      {
        link: "/s3-integration-iam-role-eks",
        name: "S3 Integration With AWS IAM role in EKS",
        subLinks: [],
      },
      {
        link: "/opentelemetry-operator-usage",
        name: "OpenTelemetry Operator Usage",
        subLinks: [],
      },
      {
        link: "/opentelemetry-binary-usage-in-virtual-machine",
        name: "OpenTelemetry Binary Usage in Virtual Machine",
        subLinks: [],
      },
      {
        link: "/setting-up-tls-for-signoz",
        name: "Secure SigNoz in Kubernetes using Ingress-NGINX and Cert-Manager",
        subLinks: [],
      },
      {
        link: "/setting-up-sso-saml-with-keycloak",
        name: "Setting Up SSO SAML 2.0 With Keycloak",
        subLinks: [],
      }
    ]
  }
];

export default docsLinks;
