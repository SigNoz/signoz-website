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
      },
      {
        link: "/docker-swarm",
        name: "Docker Swarm",
      },
      {
        link: "/kubernetes",
        name: "Kubernetes",
        subLinks: [
          {
            link: "/aws",
            name: "Deploying to AWS",
          },
          {
            link: "/gcp",
            name: "Deploying to GCP",
          },
          {
            link: "/others",
            name: "Deploying to Helm directly",
          },
        ],
      },
    ],
  },
  {
    link: "/instrumentation_app",
    name: "Instrumentation",
    subLinks: [
      {
        link: "/overview",
        name: "Overview",
      },
      {
        link: "/python",
        name: "Python",
        subLinks: [
          {
            link: "/django",
            name: "Django OpenTelemetry Instrumentation",
          },
          {
            link: "/fastapi",
            name: " FastAPI OpenTelemetry Instrumentation",
          },
          {
            link: "/flask",
            name: " Flask OpenTelemetry Instrumentation",
          },
          {
            link: "/falcon",
            name: " Falcon OpenTelemetry Instrumentation",
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
          },
          {
            link: "/tomcat",
            name: "Tomcat OpenTelemetry Instrumentation",
          },
          {
            link: "/jboss",
            name: " JBoss OpenTelemetry Instrumentation",
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
          },
          {
            link: "/nestjs",
            name: "Nestjs OpenTelemetry Instrumentation",
          },
          {
            link: "/angular",
            name: " Angular OpenTelemetry Instrumentation",
          },
        ],
      },
      {
        link: "/golang",
        name: "Go OpenTelemetry Instrumentation",
      },
      {
        link: "/php",
        name: "PHP OpenTelemetry Instrumentation",
      },
      {
        link: "/dotnet",
        name: ".NET OpenTelemetry Instrumentation",
      },
      {
        link: "/ruby-on-rails",
        name: "Ruby on Rails OpenTelemetry Instrumentation",
      },
      {
        link: "/elixir",
        name: "Elixir OpenTelemetry Instrumentation",
      },
      {
        link: "/rust",
        name: "Rust OpenTelemetry Instrumentation",
      },
      {
        link: "/troubleshoot-instrumentation",
        name: "Troubleshoot Instrumentation",
      },
    ],
  },
  {
    link: "/operate",
    name: "Operate",
    subLinks: [
      {
        link: "/configuration",
        name: "Configuration",
      },
      {
        link: "/docker-standalone",
        name: "Docker Standalone",
      },
      {
        link: "/docker-swarm-operate",
        name: "Docker Swarm",
      },
      {
        link: "/kubernetes-operate",
        name: "Kubernetes",
      },
      {
        link: "/migration",
        name: "Migration Guides",
        subLinks: [
          {
            link: "/upgrade-0.8.0",
            name: "Upgrade to 0.8.0",
          },
          {
            link: "/upgrade-0.8.1",
            name: "Upgrade to 0.8.1",
          },
          {
            link: "/upgrade-0.9",
            name: "Upgrade to 0.9",
          },
          {
            link: "/upgrade-0.10",
            name: "Upgrade to 0.10",
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
          },
          {
            link: "/connect-to-clickhouse",
            name: "Connect to ClickHouse",
          },
        ],
      },
    ],
  },
  {
    link: "/userguide",
    name: "Use SigNoz",
    subLinks: [
      {
        link: "/send-metrics",
        name: "Send Metrics",
      },
      {
        link: "/navigate-user-interface",
        name: "Navigate the User Interface",
      },
      {
        link: "/metrics",
        name: "View Services",
      },
      {
        link: "/traces",
        name: "View Traces",
        subLinks: [
          {
            link: "/span-details",
            name: "Span Details",
          },
        ],
      },
      {
        link: "/logs",
        name: "Logs",
        subLinks: [
          {
            link: "/logs_query_builder",
            name: "Logs Query Builder",
          },
          {
            link: "/logs_fields",
            name: "Fields in Logs",
          },
          {
            link: "/collecting-logs",
            name: "Collecting Logs",
            subLinks: [
              {
                link: "/collect_kubernetes_pod_logs",
                name: "Collecting Kubernetes Pod Logs",
              },
              {
                link: "/collect_docker_logs",
                name: "Collecting Docker Container Logs",
              },
              {
                link: "/collecting_syslogs",
                name: "Collecting syslogs",
              },
              {
                link: "/collect_logs_from_file",
                name: "Collecting Application Logs from Log File",
              },
              {
                link: "/collecting_nodejs_winston_logs",
                name: "Collecting Nodejs Winston Logs",
              },
              {
                link: "/collecting-application-logs-using-otel-sdk",
                name: "Collecting Application Logs using OTEL SDK",
                subLinks: [
                  {
                    link: "/collecting_application_logs_otel_sdk_python",
                    name: "Collecting Application Logs using OTEL Python SDK",
                  },
                  {
                    link: "/collecting_application_logs_otel_sdk_java",
                    name: "Collecting Application Logs using OTEL Java SDK",
                  },
                ],
              },
            ],
          },
          {
            link: "/existing-collectors-to-signoz",
            name: "Existing Collectors to SigNoz",
            subLinks: [
              {
                link: "/fluentbit_to_signoz",
                name: "FluentBit to SigNoz",
              },
              {
                link: "/fluentd_to_signoz",
                name: "FluentD to SigNoz",
              },
              {
                link: "/logstash_to_signoz",
                name: "Logstash to SigNoz",
              },
            ],
          },
        ],
      },
      {
        link: "/manage-dashboards-and-panels",
        name: "Manage Dashboards and Panels",
        subLinks: [
          {
            link: "/manage-dashboards",
            name: "Manage Dashboards",
          },
          {
            link: "/manage-panels",
            name: "Manage Panels",
          },
          {
            link: "/manage-variables",
            name: "Manage Vairables",
          },
          {
            link: "/create-a-custom-query",
            name: "Create a Custom Query",
          },
        ],
      },
      {
        link: "/exceptions",
        name: "Exceptions",
      },
      {
        link: "/alerts-management",
        name: "Alerts",
      },
      {
        link: "/authentication",
        name: "Authentication",
      },
      {
        link: "/retention-period",
        name: "Retention Period",
      },
      {
        link: "/service-map",
        name: "Service Map",
      },
    ],
  },
  {
    link: "/tutorials",
    name: "Tutorials",
    subLinks: [
      {
        link: "/jvm-metrics",
        name: "Spring Boot JVM Metrics",
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
      },
    ],
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
    ],
  },
  {
    link: "/telemetry",
    name: "Telemetry",
    subLinks: [],
  },
];

export default docsLinks;
