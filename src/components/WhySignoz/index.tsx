import Title from "components/Title";
import WhySignozCard from "./Card";
import { useEffect, useRef } from "react";
import useIntersectionObserver from "hooks/useIntersectionObserver";

const WhySignoz = () => {
  const ref = useRef<HTMLDivElement>(null);

  const data = [
    {
      normalText: "Ipsum officia ",
      redText:
        "Proident nisi excepteur est sint laborum eiusmod nisi et aliquip.",
    },
    {
      normalText: "Do culpa ",
      redText:
        "Minim do veniam cillum mollit incididunt proident sunt nulla elit consectetur veniam anim.",
    },
    {
      normalText: "Do culpa 2",
      redText:
        "Minim do veniam cillum mollit incididunt proident sunt nulla elit consectetur veniam anim.",
    },
    {
      normalText: "Do culpa 3",
      redText:
        "Minim do veniam cillum mollit incididunt proident sunt nulla elit consectetur veniam anim.",
    },
  ];

  return (
    <div>
      <div className="flex justify-center">
        <Title isLastWordColor>Why Signoz</Title>
        <Title>?</Title>
      </div>

      <div className="mt-10 px-4 gap-4 flex items-center h-[300px] overflow-x-scroll">
        {data.map((card) => (
          <WhySignozCard
            key={card.normalText}
            normalText={card.normalText}
            redText={card.redText}
            className="min-w-[271px]"
          />
        ))}
      </div>
    </div>
  );
};

export default WhySignoz;
