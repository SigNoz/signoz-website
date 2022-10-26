import Title from "components/Title";
import React, { useEffect, useState } from "react";
import Card, { FeedbackCardProps } from "./Card";
import cx from "classnames";
import getIcons from "asset/icons";

const SignozFeedback = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const cardWidth = 300;

  const feedbacks: FeedbackCardProps[] = [
    {
      authorImage: "/images/authors/ankit_anand.webp",
      authorName: "Pawan Bhadauria",
      feedback: `A new and yet powerful
          <span class="text-signoz-primary">
            #observability #opensource
          </span>
          alternative has born in the name of SigNoz. It could offer a serious
          challenger to Datadog / New Relic and other SaaS solutions`,
      authorPosition: "VP - Engineering, Outplay",
      id: "1",
    },
    {
      authorImage: "/images/authors/ankit_anand.webp",
      authorName: "Pawan Bhadauria",
      feedback: `
      <div>
      A new and yet powerful
      <span class="text-signoz-primary">
      #observability #opensource
      </span>
      alternative has born in the name of SigNoz. It could offer a serious
      challenger to Datadog / New Relic and other SaaS solutions saple 1
      </div>
      `,
      authorPosition: "VP - Engineering, Outplay",
      id: "2",
    },
    {
      authorImage: "/images/authors/ankit_anand.webp",
      authorName: "Pawan Bhadauria",
      feedback: `A new and yet powerful
          <span class="text-signoz-primary">
            #observability #opensource
          </span>
          alternative has born in the name of SigNoz. It could offer a serious
          challenger to Datadog / New Relic and other SaaS solutions sample 2`,
      authorPosition: "VP - Engineering, Outplay",
      id: "3",
    },
    {
      authorImage: "/images/authors/ankit_anand.webp",
      authorName: "Pawan Bhadauria",
      feedback: `A new and yet powerful
          <span class="text-signoz-primary">
            #observability #opensource
          </span>
          alternative has born in the name of SigNoz. It could offer a serious
          challenger to Datadog / New Relic and other SaaS solutions sample 3`,
      authorPosition: "VP - Engineering, Outplay",
      id: "4",
    },
  ];

  useEffect(() => {
    const el = document.getElementById("feedbackContainer");
    if (el) {
      el.addEventListener("scroll", (event) => {
        if (event.target) {
          const { scrollLeft } = event.target as HTMLDivElement;
          const currentSlide = parseInt(
            (scrollLeft / cardWidth).toString(),
            10
          );
          setCurrentSlide(currentSlide);
        }
      });
    }

    return () => {
      if (el) {
        el.removeEventListener("scroll", () => {});
      }
    };
  }, []);

  const onClickLeft = (currentSlide: number) => {
    const el = document.getElementById("feedbackContainer");
    el?.scrollBy({
      left: -cardWidth * 1.5,
      behavior: "smooth",
    });
    if (currentSlide > 0 && el) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const onClickRight = (currentSlide: number) => {
    const el = document.getElementById("feedbackContainer");
    el?.scrollBy({
      left: cardWidth * 1.5,
      behavior: "smooth",
    });

    if (currentSlide < feedbacks.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <div className="bg-card-pattern-gradient relative flex justify-center flex-col h-[55vh] bg-cover bg-repeat-x bg-center">
      <div className="flex justify-center flex-col text-center md:flex-row">
        <Title isLastWordColor>We love&nbsp;</Title>
        <Title>what people are saying about Signoz</Title>
      </div>

      <div className="flex">
        <div
          className={`flex w-full gap-6 relative flex-col m-auto mt-8 md:max-w-[950px] md:m-auto`}
        >
          <div
            id="feedbackContainer"
            className={`flex gap-6 p-4 md:max-w-[936px]  overflow-x-scroll md:m-auto`}
          >
            <button
              onClick={() => onClickLeft(currentSlide)}
              className="absolute hidden md:block left-[-5%] disabled:opacity-50 top-[40%] bg-signoz-primary rounded"
              disabled={currentSlide === 0}
            >
              {getIcons("arrowLeft")}
            </button>
            {feedbacks.map((feedback) => (
              <Card key={feedback.feedback} {...feedback} />
            ))}
            <button
              onClick={() => onClickRight(currentSlide)}
              disabled={currentSlide === feedbacks.length - 1}
              className="absolute hidden md:block disabled:opacity-50 right-[-5%] top-[40%] bg-signoz-primary rounded"
            >
              {getIcons("arrowRight")}
            </button>
          </div>
          <div className="flex gap-4 justify-center">
            {feedbacks.map((feedback, index) => (
              <div
                key={feedback.id}
                className={cx("w-3 h-3 rounded-full", {
                  "bg-signoz-primary": index === currentSlide,
                  "bg-signoz-medium-light": index !== currentSlide,
                })}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignozFeedback;
