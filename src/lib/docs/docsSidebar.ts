import { DocsLinks } from "container/DocsSidebar";

const docsLinks: DocsLinks[] = [
  {
    link: "/introduction",
    url: "/introduction",
    name: "Introduction",
  },
  {
    link: "/install",
    url: "/install",
    name: "Install",
    subLinks: [
      {
        link: "/install/docker",
        url: "/install/docker",
        name: "Docker Standalone",
      },
      {
        link: "/install/docker-swarm",
        name: "Docker Swarm",
        url: "/install/docker-swarm",
      },
      {
        link: "/install/kubernetes",
        url: "/install/kubernetes",
        name: "Kubernetes",
        subLinks: [
          {
            link: "/install/kubernetes/aws",
            url: "/install/kubernetes/aws",
            name: "Deploying to AWS",
          },
          {
            link: "/install/kubernetes/gcp",
            url: "/install/kubernetes/gcp",
            name: "Deploying to GCP",
          },
          {
            link: "/install/kubernetes/others",
            url: "/install/kubernetes/others",
            name: "Other Platform",
          },
        ],
      },
      {
        link: "/install/docker-swarm",
        name: "Troubleshooting",
        url: "/install/docker-swarm",
      },
    ],
  },
  {
    link: "/instrumentation",
    url: "/instrumentation",
    name: "Instrumentation",
    subLinks: [
      {
        link: "/instrumentation/overview",
        name: "Overview",
        url: "/instrumentation/overview",
      },
      {
        link: "/instrumentation/python",
        url: "/instrumentation/python",
        name: "Python",
        subLinks: [
          {
            link: "/instrumentation/python/django",
            name: "Django OpenTelemetry Instrumentation",
            url: "/instrumentation/django",
          },
          {
            link: "/instrumentation/python/fastapi",
            name: "FastAPI OpenTelemetry Instrumentation",
            url: "/instrumentation/fastapi",
          },
          {
            link: "/instrumentation/python/flask",
            name: "Flask OpenTelemetry Instrumentation",
            url: "/instrumentation/flask",
          },
          {
            link: "/instrumentation/python/falcon",
            name: "Falcon OpenTelemetry Instrumentation",
            url: "/instrumentation/falcon",
          },
        ],
      },
      {
        link: "/instrumentation/java",
        url: "/instrumentation/java",
        name: "Java",
        subLinks: [
          {
            link: "/instrumentation/java/springboot",
            name: "Spring Boot OpenTelemetry Instrumentation",
            url: "/instrumentation/springboot",
          },
          {
            link: "/instrumentation/java/tomcat",
            name: "Tomcat OpenTelemetry Instrumentation",
            url: "/instrumentation/tomcat",
          },
          {
            link: "/instrumentation/java/jboss",
            name: "JBoss OpenTelemetry Instrumentation",
            url: "/instrumentation/jboss",
          },
        ],
      },
      {
        link: "/instrumentation/javascript",
        url: "/instrumentation/javascript",
        name: "JavaScript",
        subLinks: [
          {
            link: "/instrumentation/javascript/express",
            name: "Express OpenTelemetry Instrumentation",
            url: "/instrumentation/express",
          },
          {
            link: "/instrumentation/javascript/nestjs",
            name: "NestJS OpenTelemetry Instrumentation",
            url: "/instrumentation/nestjs",
          },
          {
            link: "/instrumentation/javascript/angular",
            name: "Angular OpenTelemetry Instrumentation",
            url: "/instrumentation/angular",
          },
        ],
      },
      {
        link: "/instrumentation/golang",
        name: "Go OpenTelemetry Instrumentation",
        url: "/instrumentation/golang",
      },
      {
        link: "/instrumentation/golang",
        name: "PHP OpenTelemetry Instrumentation",
        url: "/instrumentation/golang",
      },
      {
        link: "/instrumentation/dotnet",
        name: ".NET OpenTelemetry Instrumentation",
        url: "/instrumentation/dotnet",
      },
      {
        link: "/instrumentation/ruby-on-rails",
        name: "Ruby on Rails OpenTelemetry Instrumentation",
        url: "/instrumentation/ruby-on-rails",
      },
      {
        link: "/instrumentation/elixir",
        name: "Elixir OpenTelemetry Instrumentation",
        url: "/instrumentation/elixir",
      },
      {
        link: "/instrumentation/rust",
        name: "Rust OpenTelemetry Instrumentation",
        url: "/instrumentation/rust",
      },
      {
        link: "/instrumentation/troubleshoot-instrumentation",
        name: "Troubleshoot Instrumentation",
        url: "/instrumentation/troubleshoot-instrumentation",
      },
    ],
  },
  {
    link: "/operate",
    url: "/operate",
    name: "Operate",
    subLinks: [
      {
        link: "/operate/configuration",
        name: "Configuration",
        url: "/operate/configuration",
      },
      {
        link: "/operate/docker-standalone",
        name: "Docker Standalone",
        url: "/operate/docker-standalone",
      },
      {
        link: "/operate/docker-swarm-operate",
        name: "Docker Swarm",
        url: "/operate/docker-swarm",
      },
      {
        link: "/operate/kubernetes-operate",
        name: "Kubernetes",
        url: "/operate/kubernetes",
      },
      {
        link: "/operate/migration",
        name: "Migration Guide",
        url: "/operate/migration",
        subLinks:[
          {
            link: "/operate/migration/upgrade-0.8.0",
            name: "upgrade-0.8.0",
            url: "/operate/migration/upgrade-0.8.0",
          },
          {
            link: "/operate/migration/upgrade-0.8.1",
            name: "upgrade-0.8.1",
            url: "/operate/migration/upgrade-0.8.1",
          },
          {
            link: "/operate/migration/upgrade-0.9",
            name: "upgrade-0.9",
            url: "/operate/migration/upgrade-0.9",
          },
          {
            link: "/operate/migration/upgrade-0.10",
            name: "upgrade-0.10",
            url: "/operate/migration/upgrade-0.10",
          },
        ],
      },
      {
        link: "/operate/clickhouse",
        name: "ClickHouse",
        url: "/operate/clickhouse",
        subLinks:[
          {
            link: "/operate/clickhouse/increase-clickhouse-pv",
            name: "Increase ClickHouse PV",
            url: "/operate/clickhouse/increase-clickhouse-pv",
          },
          {
            link: "/operate/clickhouse/connect-to-clickhouse",
            name: "Connect to ClickHouse",
            url: "/operate/clickhouse/connect-to-clickhouse",
          },
        ],
      },
    ],
  },
  {
    link: "/userguide/userguide",
    url: "/userguide",
    name: "Use SigNoz",
    subLinks: [
      {
        link: "/userguide/overview",
        name: "Overview",
        url: "/userguide/overview",
      },
      {
        link: "/userguide/send-metrics",
        name: "Send Metrics",
        url: "/userguide/send-metrics",
      },
      {
        link: "/userguide/navigate-user-interface",
        name: "Navigate the User Interface",
        url: "/userguide/navigate-user-interface",
      },
      {
        link: "/userguide/traces",
        name: "View Traces",
        url: "/userguide/traces",
        subLinks: [
          {
            link: "/userguide/traces/span-details",
            name: "Span Details",
            url: "/userguide/span-details",
          },
        ],
      },
      {
        link: "/userguide/logs",
        name: "Logs",
        url: "/userguide/logs",
        subLinks: [
          {
            link: "/userguide/logs_query_builder",
            name: "Logs Query Builder",
            url: "/userguide/logs_query_builder",
          },
          {
            link: "/userguide/logs_fields",
            name: "Fields in Logs",
            url: "/userguide/logs_fields",
          },
          {
            link: "/userguide/collecting-logs",
            name: "Collecting Logs",
            url: "/userguide/collecting-logs",
            subLinks:[
              {
                link: "/userguide/collect_kubernetes_pod_logs",
                name: "Collecting Kubernetes Pod Logs",
                url: "/userguide/collect_kubernetes_pod_logs",
              },
              {
                link: "/userguide/collect_docker_logs",
                name: "Collecting Docker Container Logs",
                url: "/userguide/collect_docker_logs",
              },
              {
                link: "/userguide/collecting_syslogs",
                name: "Collecting SysLogs",
                url: "/userguide/collecting_syslogs",
              },
              {
                link: "/userguide/collect_logs_from_file",
                name: "Collecting Application Logs from Log File",
                url: "/userguide/collect_logs_from_file",
              },
              {
                link: "/userguide/collecting_nodejs_winston_logs",
                name: "Collecting NodeJS winston Logs",
                url: "/userguide/collecting_nodejs_winston_logs",
              },
              {
                link: "/userguide/collecting_application_logs_otel_sdk_python",
                name: "Collecting Application Logs using OTEL SDK",
                url: "/userguide/collecting_application_logs_otel_sdk_python",
                subLinks: [
                  {
                    link: "/userguide/collecting_application_logs_otel_sdk_python",
                    name: "Collecting Application Logs Using OTEL Python SDK",
                    url: "/userguide/collecting_application_logs_otel_sdk_python",
                  },
                  {
                    link: "/userguide/collecting_application_logs_otel_sdk_java",
                    name: "Collecting Application Logs Using OTEL Java Agent",
                    url: "/userguide/collecting_application_logs_otel_sdk_java",
                  },
                ],
              },
            ],
          },
          {
            link: "/userguide/logs_query_builder",
            name: "Existing Collectors to SigNoz",
            url: "/userguide/logs_query_builder",
            subLinks:[
              {
                link: "/userguide/fluentbit_to_signoz",
                name: "FluentBit to SigNoz",
                url: "/userguide/fluentbit_to_signoz",
              },
              {
                link: "/userguide/fluentd_to_signoz",
                name: "FluentD to SigNoz",
                url: "/userguide/fluentd_to_signoz",
              },
              {
                link: "/userguide/logstash_to_signoz",
                name: "Logstash to SigNoz",
                url: "/userguide/logstash_to_signoz",
              },
            ],
          },
        ],
      },
      {
        link: "/userguide/manage-dashboards-and-panels",
        name: "Manage Dashboards and Panels",
        url: "/userguide/manage-dashboards-and-panels",
        subLinks: [
          {
            link: "/userguide/manage-dashboards",
            name: "Manage Dashboards",
            url: "/userguide/manage-dashboards",
          },
          {
            link: "/userguide/manage-panels",
            name: "Manage Panels",
            url: "/userguide/manage-panels",
          },
          {
            link: "/userguide/manage-variables",
            name: "Manage variables",
            url: "/userguide/manage-variables",
          },
          {
            link: "/userguide/create-a-custom-query",
            name: "Create a Custom Query",
            url: "/userguide/create-a-custom-query",
          },
        ],
      },
      {
        link: "/userguide/exceptions",
        name: "Exceptions",
        url: "/userguide/exceptions",
      },
      {
        link: "/userguide/alerts-management",
        name: "Alerts",
        url: "/userguide/alerts-management",
      },
      {
        link: "/userguide/authentication",
        name: "Authentication",
        url: "/userguide/authentication",
      },
      {
        link: "/userguide/retention-period",
        name: "Retention Period",
        url: "/userguide/retention-period",
      },
      {
        link: "/userguide/service-map",
        name: "Service Map",
        url: "/userguide/service-map",
      },   
    ],
  },
  {
    link: "/tutorials",
    url: "/tutorials",
    name: "Tutorials",
    subLinks: [
      {
        link: "/tutorials/jvm-metrics",
        name: "Spring Boot JVM Metrics",
        url: "/tutorial/jvm-metrics",
      },
      {
        link: "/tutorials/kubernetes-infra-metrics",
        name: "K8s Infra Metrics and Logs Collection",
        url: "/tutorial/kubernetes-infra-metrics",
      },
      {
        link: "/tutorials/mongodb-metrics",
        name: "MongoDB Metrics",
        url: "/tutorial/mongodb-metrics",
      },
      {
        link: "/tutorials/instrumenting-angular-frontend",
        name: "Instrumenting Angular Frontend Web App",
        url: "/tutorial/instrumenting-angular-frontend",
      },
      {
        link: "/tutorials/s3-integration-iam-role-eks",
        name: "S3 Integration With AWS IAM role in EKS",
        url: "/tutorial/s3-integration-iam-role-eks",
      },
      {
        link: "/tutorials/opentelemetry-operator-usage",
        name: "OpenTelemetry Operator Usage",
        url: "/tutorial/opentelemetry-operator-usage",
      },
      {
        link: "/tutorials/opentelemetry-binary-usage-in-virtual-machine",
        name: "OpenTelemetry Binary Usage in Virtual Machine",
        url: "/tutorial/opentelemetry-binary-usage-in-virtual-machine",
      },
      {
        link: "/tutorials/setting-up-tls-for-signoz",
        name: "Secure SigNoz in Kubernetes using Ingress-NGINX and Cert-Manager",
        url: "/tutorial/setting-up-tls-for-signoz",
      },
      {
        link: "/tutorials/setting-up-sso-saml-with-keycloak",
        name: "Setting Up SSO SAML 2.0 With Keycloak",
        url: "/tutorial/setting-up-sso-saml-with-keycloak",
      },
    ]
  },
  {
    link: "/architecture",
    url: "/architecture",
    name: "Technical Architecture",
  },
  {
    link: "/contributing",
    url: "/contributing",
    name: "Contributing Guidelines",
  },
  {
    link: "/community",
    url: "/community",
    name: "Community",
  },
  {
    link: "/roadmap",
    url: "/roadmap",
    name: "Product Roadmap",
  },
  {
    link: "/faqs",
    url: "/faqs",
    name: "FAQs",
    subLinks:[
      {
        link: "/faqs/product",
        url: "/faqs/product",
        name: "Product - FAQs",
      },
      {
        link: "/faqs/troubleshooting",
        url: "/faqs/troubleshooting",
        name: "Troubleshooting - FAQs",
      },
      {
        link: "/faqs/instrumentation",
        url: "/faqs/instrumentation",
        name: "Instrumentation - FAQs",
      },
      {
        link: "/faqs/installation",
        url: "/faqs/installation",
        name: "Installation - FAQs",
      },
    ],
  },
  {
    link: "/telemetry",
    url: "/telemetry",
    name: "Others",
    subLinks: [
      {
        link: "/telemetry",
        url: "/telemetry",
        name: "Telemetry",
      },
    ],
  },
];

export default docsLinks;


