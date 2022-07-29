import React from "react";
import Title from "components/Title";
import Card from "components/Card";
import NextImage from "next/image";
import Button from "components/Button";

const LatestBlogPosts = (): JSX.Element => {
  const BlogDetails: BlogDetailsProps[] = [
    {
      cardTitle:
        "MEVN stack tutorial | Build a CRUD app using Vue 3, Node, Express & MongoDB",
      subtext:
        "This tutorial shows you how you can visualise JVM metrics from Spring Boot applications in SigNoz.",
      cardTag: "TUTORIAL",
      authors: [
        {
          name: "Prashant",
          imageSourceUrl: "/images/blogauthor.png",
          community: "SigNoz Community",
        },
      ],
    },
    {
      cardTitle:
        "Kubernetes monitoring with open-source tools [OpenTelemetry and SigNoz]",
      subtext:
        "This tutorial shows you how you can visualise JVM metrics from Spring Boot applications in SigNoz.",
      cardTag: "TUTORIAL",
      authors: [
        {
          name: "Prashant 1",
          imageSourceUrl: "/images/blogauthor.png",
          community: "SigNoz Community",
        },
      ],
    },
    {
      cardTitle:
        "OpenTelemetry in a C# .NET application | Implementation guide",
      subtext:
        "This tutorial shows you how you can visualise JVM metrics from Spring Boot applications in SigNoz.",
      cardTag: "TUTORIAL",
      authors: [
        {
          name: "Prashant 2",
          imageSourceUrl: "/images/blogauthor.png",
          community: "SigNoz Community",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col md:justify-center md:items-center">
      <div className="flex flex-col text-center">
        <Title>Latest blog posts</Title>
      </div>
      <div className="flex w-full p-4 gap-4 md:gap-6 md:items-center overflow-x-scroll md:justify-center">
        {BlogDetails.map((BlogDetails: BlogDetailsProps, index: number) => {
          return (
            <Card
              className="p-0 mt-6 min-w-[310px] md:w-[369px]"
              key={BlogDetails.cardTitle + index}
            >
              <>
                <div className="bg-card-pattern-gradient bg-signoz-primary-light py-4 px-4 flex items-center justify-center rounded-top1 flex-col bg-contain">
                  <div className="bg-signoz-light-pink text-signoz-primary font-medium text-[8px] py-1 px-2 rounded-[3.125rem] text-center">
                    {BlogDetails.cardTag}
                  </div>
                  <div className="font-semibold text-white mt-4">
                    {BlogDetails.cardTitle}
                  </div>
                </div>
                <div className="px-4 pt-4 min-h-[116px] pb-6">
                  <div className="text-signoz-dark-light font-normal mb-2">
                    June 7, 2022 · 11 min read
                  </div>
                  <div className="text-base font-semibold tracking-lightTigher">
                    {BlogDetails.cardTitle}
                  </div>
                  <div className="flex mt-6">
                    {BlogDetails.authors.map(
                      ({ imageSourceUrl, name, community }) => (
                        <div key={name + index} className="flex">
                          <div className="mr-2">
                            <NextImage
                              src={imageSourceUrl}
                              layout="intrinsic"
                              width={24}
                              height={24}
                            />
                          </div>
                          <div>
                            <div className="text-xs font-medium tracking-lightTigher mb-[2px] text-signoz-dark-intermediate">
                              {name}
                            </div>
                            <div className="text-[0.625rem] text-signoz-dark-light font-normal">
                              {community}
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </>
            </Card>
          );
        })}
      </div>
      <div className="px-4 md:p-0">
        <Button fullWidth variant="secondary" className="mt-8 md:w-32">
          Read more
        </Button>
      </div>
    </div>
  );
};

interface BlogDetailsProps {
  cardTitle: string;
  subtext: string;
  cardTag: string;
  authors: AuthorProps[];
}

interface AuthorProps {
  name: string;
  imageSourceUrl: string;
  community: string;
}

export default LatestBlogPosts;
