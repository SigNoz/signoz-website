import Accordion from "components/Accordion";
import Title from "components/Title";
import { Faqs } from "./config";

const FAQ = () => (
  <>
    <div className="flex flex-col items-center justify-center text-center">
      <Title className="text-2xl" isLastWordColor>
        Frequently asked questions
      </Title>
      <div className="font-openSans text-center mt-4 md:font-light md:text-xl font-light text-base text-signoz-pure">
        If you are hesitating, do not worry - we are here to explain everything
        you might want to know. Let us help!{" "}
      </div>
    </div>
    <div className="p-4 mb-16 md:mb-0 md:max-w-[1156px] m-auto">
      {Faqs.map((faq) => (
        <Accordion
          key={faq.question}
          text={faq.question}
          className="w-full"
          expandableText={faq.answer}
        />
      ))}
    </div>
  </>
);

export default FAQ;
