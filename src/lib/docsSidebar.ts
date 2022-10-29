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
    link: "/instrumentation_app",
    name: "Instrumentation",
    subLinks: [
      {
        link: "/overview",
        name: "Overview",
        subLinks: [],
      },
      {
        link: "/python",
        name: "Python",
        subLinks: [
          {
            link: "/django",
            name: "Django OpenTelemetry Instrumentation",
            subLinks: []
          },
          {
            link: "/fastapi",
            name: " FastAPI OpenTelemetry Instrumentation",
            subLinks: []
          },
          {
            link: "/flask",
            name: " Flask OpenTelemetry Instrumentation",
            subLinks: []
          },
          {
            link: "/falcon",
            name: " Falcon OpenTelemetry Instrumentation",
            subLinks: []
          },
        ],
      },
      {
        link: "/java",
        name: "Java",
        subLinks: [
          {
            link: "/springboot",
            name: "Spring Boot OpenTelemetry Instrumentation",
            subLinks: []
          },
          {
            link: "/tomcat",
            name: "Tomcat OpenTelemetry Instrumentation",
            subLinks: []
          },
          {
            link: "/jboss",
            name: " JBoss OpenTelemetry Instrumentation",
            subLinks: []
          },
        ],
      },
      {
        link: "/javascript",
        name: "Javascript",
        subLinks: [
          {
            link: "/express",
            name: "Express OpenTelemetry Instrumentation",
            subLinks: []
          },
          {
            link: "/nestjs",
            name: "Nestjs OpenTelemetry Instrumentation",
            subLinks: []
          },
          {
            link: "/angular",
            name: " Angular OpenTelemetry Instrumentation",
            subLinks: []
          },
        ],
      },
      {
        link: "/golang",
        name: "Go OpenTelemetry Instrumentation",
        subLinks: [],
      },
      {
        link: "/php",
        name: "PHP OpenTelemetry Instrumentation",
        subLinks: [],
      },
      {
        link: "/dotnet",
        name: ".NET OpenTelemetry Instrumentation",
        subLinks: [],
      },
      {
        link: "/ruby-on-rails",
        name: "Ruby on Rails OpenTelemetry Instrumentation",
        subLinks: [],
      },
      {
        link: "/elixir",
        name: "Elixir OpenTelemetry Instrumentation",
        subLinks: [],
      },
      {
        link: "/rust",
        name: "Rust OpenTelemetry Instrumentation",
        subLinks: [],
      },
      {
        link: "/troubleshoot-instrumentation",
        name: "Troubleshoot Instrumentation",
        subLinks: [],
      },
    ]
  },
  {
    link: "/operate",
    name: "Operate",
    subLinks: [
      {
        link: "/configuration",
        name: "Configuration",
        subLinks: [],
      },
      {
        link: "/docker-standalone",
        name: "Docker Standalone",
        subLinks: [],
      },
      {
        link: "/docker-swarm-operate",
        name: "Docker Swarm",
        subLinks: [],
      },
      {
        link: "/kubernetes-operate",
        name: "Kubernetes",
        subLinks: [],
      },
      {
        link: "/migration",
        name: "Migration Guides",
        subLinks: [
          {
            link: "/upgrade-0.8.0",
            name: "Upgrade to 0.8.0",
            subLinks: []
          },
          {
            link: "/upgrade-0.8.1",
            name: "Upgrade to 0.8.1",
            subLinks: []
          },
          {
            link: "/upgrade-0.9",
            name: "Upgrade to 0.9",
            subLinks: []
          },
          {
            link: "/upgrade-0.10",
            name: "Upgrade to 0.10",
            subLinks: []
          },
        ],
      },
      {
        link: "/clickhouse",
        name: "ClickHouse",
        subLinks: [
          {
            link: "/increase-clickhouse-pv",
            name: "Increase ClickHouse PV",
            subLinks: []
          },
          {
            link: "/connect-to-clickhouse",
            name: "Connect to ClickHouse",
            subLinks: []
          },
        ],
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
    link: "/telemetry",
    name: "Telemetry",
    subLinks: [],
  },
];

export default docsLinks;
