import { BlogCardProps } from ".";

export const getTags = (tags: BlogCardProps["tags"]) => {
  switch (tags) {
    case "product": {
      return "Product News";
    }
    case "technical": {
      return "Technical";
    }
    case "tools": {
      return "Tool Comparison";
    }
    case "open-telementry-implementations": {
      return "OpenTelemetry Implementations";
    }
    case "most-recent-post": {
      return "Most Recent Posts";
    }
    case "product-updates": {
      return "Product Updates";
    }
    case "observability": {
      return "Observability";
    }
    case "tech-resources": {
      return "Tech Resources";
    }
    case "dot-net": {
      return ".NET";
    }
    case "apm": {
      return "APM";
    }
    case "community": {
      return "Community";
    }
    case "database-monitoring": {
      return "Database Monitoring";
    }
    case "distributed-tracing": {
      return "Distributed Tracing";
    }
    case "docker": {
      return "Docker";
    }
    case "elixir-erlang": {
      return "Elixir/Erlang";
    }
    case "go-golang": {
      return "Go/Golang";
    }
    case "jaeger": {
      return "Jaeger";
    }
    case "java": {
      return "Java";
    }
    case "javascript": {
      return "JavaScript";
    }
    case "open-source": {
      return "Open Source";
    }
    case "hero-section": {
      return "Hero Section";
    }
    case "opentelemetry-instrumentation": {
      return "OpenTelemetry Instrumentation";
    }
    case "php": {
      return "PHP";
    }
    case "prometheus": {
      return "Prometheus";
    }
    case "python": {
      return "Python";
    }
    case "ruby": {
      return "Ruby";
    }
    case "rust": {
      return "Rust";
    }
    case "security": {
      return "Security";
    }
    case "signoz": {
      return "SigNoz";
    }
    case "talks": {
      return "Talks";
    }
    case "tech-tutorial": {
      return "Tech Tutorial";
    }
    case "tools-comparison": {
      return "Tools Comparison";
    }
    case "opentelemetry": {
      return "OpenTelemetry";
    }
    case "blog-recent-post": {
      return "Related Posts";
    }
    default: {
      console.error(tags, "tag is not implemented");
      return "";
    }
  }
};

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getBlogFooter = (date: Date, timeToReadInMinutes: number) => {
  const dateDisplay = new Date(date);
  const year = dateDisplay.getFullYear();
  const month = months[dateDisplay.getMonth()];
  const dateD = dateDisplay.getDate();
  return `${month} ${dateD} ${year} · ${Math.ceil(
    parseFloat(timeToReadInMinutes?.toPrecision(1))
  )} ${timeToReadInMinutes < 3 ? "min" : "mins"} read`;
};
