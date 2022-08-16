import BlogCard, { BlogCardProps } from "components/BlogCard";
import { useIsDesktop } from "hooks/useDeviceType";
import { useSectionScroll } from "hooks/useSectionScroll";
import { useCallback, useState } from "react";
import SectionHeader from "../SectionHeader";

const MostRecentPost = (): JSX.Element => {
  const onClickViewAllPost = useCallback(() => {
    console.log("asd");
  }, []);
  const isDesktop = useIsDesktop();

  const [currentSelected, setCurrentSelected] = useState<number>(0);

  const section = "most-recent-post";

  const Element = useSectionScroll({
    currentSelected,
    section: section,
    setCurrentSelected,
  });

  const blogs: BlogCardProps[] = [
    {
      date: new Date(),
      tags: "product",
      timeToReadInMinutes: 2,
      description:
        "OpenTelemetry can auto-instrument your Java Spring Boot application to capture telemetry data from a number of popular libraries and OpenTelemetry can auto-instrument your Java Spring Boot application to capture telemetry data from a number of popular libraries and OpenTelemetry can auto-instrument your Java Spring Boot application to capture telemetry data from a number of popular libraries and OpenTelemetry can auto-instrument your Java Spring Boot application to capture telemetry data from a number of popular libraries and ",
      title:
        "Latest top 11 distributed tracing tools [perfect for microservices] 1",
    },
    {
      date: new Date(),
      tags: "technical",
      timeToReadInMinutes: 1,
      description:
        "OpenTelemetry can auto-instrument your Java Spring Boot application to capture telemetry data from a number of popular libraries and OpenTelemetry can auto-instrument your Java Spring Boot application to capture telemetry data from a number of popular libraries and OpenTelemetry can auto-instrument your Java Spring Boot application to capture telemetry data from a number of popular libraries and OpenTelemetry can auto-instrument your Java Spring Boot application to capture telemetry data from a number of popular libraries and ",
      title:
        "Latest top 11 distributed tracing tools [perfect for microservices] 2",
    },
    {
      date: new Date(),
      tags: "tools",
      timeToReadInMinutes: 3,
      description:
        "OpenTelemetry can auto-instrument your Java Spring Boot application to capture telemetry data from a number of popular libraries and OpenTelemetry can auto-instrument your Java Spring Boot application to capture telemetry data from a number of popular libraries and OpenTelemetry can auto-instrument your Java Spring Boot application to capture telemetry data from a number of popular libraries and OpenTelemetry can auto-instrument your Java Spring Boot application to capture telemetry data from a number of popular libraries and ",
      title:
        "Latest top 11 distributed tracing tools [perfect for microservices] 3",
    },
  ];

  const firstBlogs = blogs[0];
  const rest = blogs.slice(1);

  return (
    <>
      <SectionHeader
        section="most-recent-post"
        onClickViewAllPost={onClickViewAllPost}
      />

      <div
        id={section + "scrollContainer"}
        className="overflow-x-scroll flex md:flex-row gap-4 px-4 md:px-0"
      >
        <div className="flex-2">
          {firstBlogs && (
            <BlogCard
              cardStyle={{ background: "none", boxShadow: "none" }}
              {...firstBlogs}
            />
          )}
        </div>
        <div className="flex-1 gap-4 flex md:flex-col">
          {rest.map((blog) => (
            <BlogCard
              cardStyle={{ background: "none", boxShadow: "none" }}
              key={blog.title}
              {...blog}
            />
          ))}
        </div>
      </div>

      {!isDesktop && Element}
    </>
  );
};

export default MostRecentPost;
