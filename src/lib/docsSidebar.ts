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
    link: "/userguide",
    name: "Use SigNoz",
    subLinks: [
      {
        link: "/send-metrics",
        name: "Send Metrics",
        subLinks:[
        ]
      },
      {
        link: "/navigate-user-interface",
        name: "Navigate the User Interface",
        subLinks:[
        ]
      },
      {
        link: "/metrics",
        name: "View Services",
        subLinks:[
        ]
      },
      {
        link: "/traces",
        name: "View Traces",
        subLinks:[
          {
            link: "/span-details",
            name: "Span Details",
            subLinks:[
            ]
          },
        ]
      },
      {
        link: "/logs",
        name: "Logs",
        subLinks:[
          {
            link: "/logs_query_builder",
            name: "Logs Query Builder",
            subLinks:[
            ]
          },
          {
            link: "/logs_fields",
            name: "Fields in Logs",
            subLinks:[
            ]
          },
          {
            link: "/collecting-logs",
            name: "Collecting Logs",
            subLinks:[
              {
                link: "/collect_kubernetes_pod_logs",
                name: "Collecting Kubernetes Pod Logs",
                subLinks: []
              },
              {
                link: "/collect_docker_logs",
                name: "Collecting Docker Container Logs",
                subLinks: []
              },
              {
                link: "/collecting_syslogs",
                name: "Collecting syslogs",
                subLinks: []
              },
              {
                link: "/collect_logs_from_file",
                name: "Collecting Application Logs from Log File",
                subLinks: []
              },
              {
                link: "/collecting_nodejs_winston_logs",
                name: "Collecting Nodejs Winston Logs",
                subLinks: []
              },
              {
                link: "/collecting-application-logs-using-otel-sdk",
                name: "Collecting Application Logs using OTEL SDK",
                subLinks: [
                  {
                    link: "/collecting_application_logs_otel_sdk_python",
                    name: "Collecting Application Logs using OTEL Python SDK",
                    subLinks: []
                  },
                  {
                    link: "/collecting_application_logs_otel_sdk_java",
                    name: "Collecting Application Logs using OTEL Java SDK",
                    subLinks: []
                  },
                ]
              },
            ]
          },
          {
            link: "/existing-collectors-to-signoz",
            name: "Existing Collectors to SigNoz",
            subLinks: [
              {
                link: "/fluentbit_to_signoz",
                name: "FluentBit to SigNoz",
                subLinks: []
              },
              {
                link: "/fluentd_to_signoz",
                name: "FluentD to SigNoz",
                subLinks: []
              },
              {
                link: "/logstash_to_signoz",
                name: "Logstash to SigNoz",
                subLinks: []
              }
            ]
          }
        ]
      },
      {
        link: "/manage-dashboards-and-panels",
        name: "Manage Dashboards and Panels",
        subLinks: [
          {
            link: "/manage-dashboards",
            name: "Manage Dashboards",
            subLinks: []
          },
          {
            link: "/manage-panels",
            name: "Manage Panels",
            subLinks: []
          },
          {
            link: "/manage-variables",
            name: "Manage Vairables",
            subLinks: []
          },
          {
            link: "/create-a-custom-query",
            name: "Create a Custom Query",
            subLinks: []
          },
        ]
      },
      {
        link: "/exceptions",
        name: "Exceptions",
        subLinks: []
      },
      {
        link: "/alerts-management",
        name: "Alerts",
        subLinks: []
      },
      {
        link: "/authentication",
        name: "Authentication",
        subLinks: []
      },
      {
        link: "/retention-period",
        name: "Retention Period",
        subLinks: []
      },
      {
        link: "/service-map",
        name: "Service Map",
        subLinks: []
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
