import BlogCard, { BlogCardProps } from "components/BlogCard";
import { useCallback, useState } from "react";
import SectionHeader from "../SectionHeader";
import NextImage from "next/image";
import { useIsDesktop } from "hooks/useDeviceType";
import { useSectionScroll } from "hooks/useSectionScroll";

const OpentelementryImplementation = () => {
  const onClickViewAllPost = useCallback(() => {
    console.log("asd");
  }, []);
  const isDesktop = useIsDesktop();
  const [currentSelected, setCurrentSelected] = useState<number>(0);

  const section = "open-telementry-implementations";

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
        "Latest top 11 distributed tracing tools [perfect for microservices]",
    },
    {
      date: new Date(),
      tags: "technical",
      timeToReadInMinutes: 1,
      description:
        "OpenTelemetry can auto-instrument your Java Spring Boot application to capture telemetry data from a number of popular libraries and OpenTelemetry can auto-instrument your Java Spring Boot application to capture telemetry data from a number of popular libraries and OpenTelemetry can auto-instrument your Java Spring Boot application to capture telemetry data from a number of popular libraries and OpenTelemetry can auto-instrument your Java Spring Boot application to capture telemetry data from a number of popular libraries and ",
      title:
        "Latest top 11 distributed tracing tools [perfect for microservices]",
    },
    {
      date: new Date(),
      tags: "tools",
      timeToReadInMinutes: 3,
      description:
        "OpenTelemetry can auto-instrument your Java Spring Boot application to capture telemetry data from a number of popular libraries and OpenTelemetry can auto-instrument your Java Spring Boot application to capture telemetry data from a number of popular libraries and OpenTelemetry can auto-instrument your Java Spring Boot application to capture telemetry data from a number of popular libraries and OpenTelemetry can auto-instrument your Java Spring Boot application to capture telemetry data from a number of popular libraries and ",
      title:
        "Latest top 11 distributed tracing tools [perfect for microservices]",
    },
  ];

  return (
    <div>
      <SectionHeader
        section={section}
        onClickViewAllPost={onClickViewAllPost}
      />

      <div className="flex flex-col md:flex-row">
        <div
          id={section + "scrollContainer"}
          className="px-4 md:px-0 flex overflow-x-scroll md:flex-col gap-6 md:gap-0 flex-1"
        >
          {blogs.map((blog) => (
            <BlogCard
              cardStyle={{
                boxShadow: "none",
                marginTop: "1rem",
                background: "none",
              }}
              layout={isDesktop ? "right" : "left"}
              key={blog.title}
              {...{ ...blog }}
            />
          ))}
        </div>

        {!isDesktop && Element}

        {isDesktop && (
          <div className="">
            <NextImage
              src={"/blogs/open-telementry.png"}
              lang="en"
              layout="intrinsic"
              width={354}
              height={568}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default OpentelementryImplementation;
