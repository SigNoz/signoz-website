import Button from "components/Button";
import Card from "components/Card";
import Header from "components/MDX/components/Heading/index";
import Paragraph from "components/MDX/components/Paragraph";
import PricingFAQ from "container/PricingFAQ";

const Pricing = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center">
        <Header type="h1">A Plan for team of Every size </Header>
        <Paragraph>
          Our aim is to make SigNoz accessible to everyone. Read our philosophy
          on pricing{" "}
          <a href="https://signoz.notion.site/Our-Philosophy-on-Pricing-73f5e6939c1f42be905fe937b4107dad">
            here
          </a>
        </Paragraph>
        <div className="flex md:flex-row justify-start text-left gap-8 px-4">
          <div className="px-4 flex static ">
            <Card>
              <div>
                <Header type="h3">Community</Header>
                <Paragraph>Free</Paragraph>
              </div>
              <div className="flex flex-row">
                <p>
                  <li> Open Source </li>
                  <li> Self Hosted </li>
                  <li> Key metrics like Latency, Error rates </li>
                  <li> Debug performance issues with Traces </li>
                  <li> Dashboard for Infrastructure and custom metrics </li>
                  <li> Community Support </li>
                </p>
              </div>
              <Button variant="primary" className="my-4">
                Get Started
              </Button>
            </Card>
          </div>
          <div className="px-4 flex static ">
            <Card>
              <div>
                <Header type="h3">SigNoz Cloud</Header>
                <Paragraph>Starts from USD 200/month</Paragraph>
              </div>
              <div className="flex flex-row">
                <p>
                  <li> Hosted and Managed by SigNoz </li>
                  <li> Single Sign On and SAML support included </li>
                  <li> Easily shift to self hosted if needed </li>
                  <li> Slack Support for initial setup </li>
                  <li> Usage based pricing based on data you send us </li>
                </p>
              </div>
              <Button variant="primary" className="my-4">
                Reach out to us
              </Button>
            </Card>
          </div>
          <div className="px-4 flex static ">
            <Card>
              <div>
                <Header type="h3">Enterprise Self Hosted</Header>
                <Paragraph></Paragraph>
              </div>
              <div className="flex flex-col">
                <p>
                  <li> Single Sign On support </li>
                  <li> SAML and LDAP support </li>
                  <li>
                    Visualise very large traces (&gt;10k spans) with
                    hierarchical navigation
                  </li>
                  <li> Dashboard configuration support </li>
                  <br />
                  <div style={{ fontSize: "medium" }}>Upcoming features</div>
                  <li> Predictive Resource Optimization</li>
                </p>
              </div>
              <Button variant="primary" className="my-4">
                Get Started
              </Button>
            </Card>
          </div>
        </div>
      </div>
      <div className="md:mt-[2rem] mb-[3rem]">
        <PricingFAQ />
      </div>
    </>
  );
};

export default Pricing;
