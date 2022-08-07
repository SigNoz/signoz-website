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
    default: {
      console.error("Tags is not implemented");
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
  return `${month} ${dateD} ${year} · ${timeToReadInMinutes} min read`;
};
