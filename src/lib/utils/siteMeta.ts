import siteMetadata from "../metaData";

const formatDate = (date: Date) =>
  new Date(date).toLocaleDateString(siteMetadata.locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default formatDate;
