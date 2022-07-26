import Accordion from "components/Accordion";
import Title from "components/Title";

const FAQ = () => {
  const Faqs = [
    {
      question:
        "I am looking for an application monitoring tool, is SigNoz an APM?",
      answer:
        "SigNoz is more than an APM. We provide all features like metrics and request traces which APMs provide. On top of that. we provide advanced filtering on trace data and custom aggregation on it",
    },
    {
      question: "How does SigNoz compare to Jaeger?",
      answer:
        "Few ways in which SigNoz is more advanced than Jaeger : Jaeger UI doesn’t show any metrics on traces or on filtered traces, and Jaeger can’t get aggregates on filtered traces. For example, Cassandra doesn’t support Group By, Max, etc.",
    },
    {
      question: "What will be your paid plan like?",
      answer:
        "SigNoz will be always open-source and free to be self-hosted for smaller teams. We will have role based Pricing for our enterprise edition which will have advanced features needed by bigger teams. Though for users who want hosted version of SigNoz, we do have cloud plans.",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center">
        <Title className="text-2xl" isLastWordColor>
          Frequently asked questions
        </Title>
        <div className="font-openSans text-center mt-4 font-light text-base text-signoz-pure">
          If you are hesitating, do not worry - we are here to explain
          everything you might want to know. Let us help!{" "}
        </div>
      </div>
      <div className="p-4">
        {Faqs.map((faq) => (
          <Accordion
            key={faq.question}
            text={faq.question}
            className="mt-3 md:max-w-[1156px] md:m-auto"
            expandableText={faq.answer}
          />
        ))}
      </div>
    </>
  );
};

export default FAQ;
