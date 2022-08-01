import getIcons from "asset/icons";
import Title from "components/Title";
import { useState } from "react";
import Card, { FeedbackCardProps } from "./Card";

const SignozFeedback = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const feedbacks: FeedbackCardProps[] = [
    {
      authorImage: "/images/authors/user1.jpg",
      authorName: "Pawan Bhadauria",
      feedback: `A new and yet powerful
          <span className="text-signoz-primary">
            #observability #opensource
          </span>
          alternative has born in the name of SigNoz. It could offer a serious
          challenger to Datadog / New Relic and other SaaS solutions`,
      authorPosition: "VP - Engineering, Outplay",
    },
    {
      authorImage: "/images/authors/user1.jpg",
      authorName: "Pawan Bhadauria",
      feedback: ` A new and yet powerful{" "}
          <span className="text-signoz-primary">
            #observability #opensource
          </span>{" "}
          alternative has born in the name of SigNoz. It could offer a serious
          challenger to Datadog / New Relic and other SaaS solutions saple 1`,
      authorPosition: "VP - Engineering, Outplay",
    },
    {
      authorImage: "/images/authors/user1.jpg",
      authorName: "Pawan Bhadauria",
      feedback: ` A new and yet powerful
          <span className="text-signoz-primary">
            #observability #opensource
          </span>
          alternative has born in the name of SigNoz. It could offer a serious
          challenger to Datadog / New Relic and other SaaS solutions sample 2`,
      authorPosition: "VP - Engineering, Outplay",
    },
  ];

  const onClickLeft = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const onClickRight = () => {
    if (currentSlide < feedbacks.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <div className="bg-card-pattern-gradient relative flex items-center justify-center flex-col h-[55vh] bg-cover bg-repeat-x bg-center">
      <div className="flex justify-center">
        <Title isLastWordColor>We love&nbsp;</Title>
        <Title>what people are saying about Signoz</Title>
      </div>

      <div className="flex">
        <button
          onClick={onClickLeft}
          className="absolute left-[15%] top-[40%] bg-signoz-primary rounded"
        >
          {getIcons("arrowLeft")}
        </button>
        <div className="flex overflow-x-scroll max-w-[924px] gap-6 relative  m-auto items-center mt-8">
          {feedbacks.map((feedback) => (
            <Card key={feedback.feedback} {...feedback} />
          ))}
        </div>
        <button
          onClick={onClickRight}
          className="absolute right-[15%] top-[40%] bg-signoz-primary rounded"
        >
          {getIcons("arrowRight")}
        </button>
      </div>
    </div>
  );
};

export default SignozFeedback;
