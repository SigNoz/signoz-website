import Button from "components/Button";
import Card from "components/Card";
import Header from "components/MDX/components/Heading/index";
import Paragraph from "components/MDX/components/Paragraph";
import PricingFAQ from "container/PricingFAQ";
import Link from "next/link";

const Pricing = (): JSX.Element => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center mb-8 px-4">
          <Header type="h1">A Plan for team of Every size </Header>
          <Paragraph>
            Our aim is to make SigNoz accessible to everyone. Read our
            philosophy on pricing{" "}
            <a
              className="text-[#f25733]"
              href="https://signoz.notion.site/Our-Philosophy-on-Pricing-73f5e6939c1f42be905fe937b4107dad"
            >
              here
            </a>
          </Paragraph>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-12 my-4 md:mx-28">
          <Card>
            <div>
              <Header type="h3" style={{ marginBottom: 2 }}>
                Community
              </Header>
              <Paragraph>Free</Paragraph>
            </div>
            <div className="flex flex-row mt-4 pl-4">
              <ul>
                <li> Open Source </li>
                <li> Self Hosted </li>
                <li> Key metrics like Latency, Error rates </li>
                <li> Debug performance issues with Traces </li>
                <li> Dashboard for Infrastructure and custom metrics </li>
                <li> Community Support </li>
              </ul>
            </div>
            <Button variant="primary" className="my-4 px-4 py-2">
              <Link href="/docs">Get Started</Link>
            </Button>
          </Card>
          <Card>
            <div>
              <Header type="h3" style={{ marginBottom: 0 }}>
                SigNoz Cloud
              </Header>
              <Paragraph>Starts from USD 200/month</Paragraph>
            </div>
            <div className="flex flex-row mt-4 pl-4">
              <ul>
                <li> Hosted and Managed by SigNoz </li>
                <li> Single Sign On and SAML support included </li>
                <li> Easily shift to self hosted if needed </li>
                <li> Slack Support for initial setup </li>
                <li> Usage based pricing based on data you send us </li>
              </ul>
            </div>
            <Button variant="primary" className="my-4 px-4 py-2">
              <Link
                href="https://forms.gle/yYSkntXRRPU3MHRL7"
                target="_blank"
                rel="noreferrer"
              >
                Reach out to us
              </Link>
            </Button>
          </Card>
          <Card>
            <div>
              <Header type="h3">Enterprise Self Hosted</Header>
              <Paragraph></Paragraph>
            </div>
            <div className="flex flex-row mt-4 pl-4">
              <ul>
                <li> Single Sign On support </li>
                <li> SAML and LDAP support </li>
                <li>
                  Visualise very large traces (&gt;10k spans) with hierarchical
                  navigation
                </li>
                <li> Dashboard configuration support </li>
                <br />
                <div
                  style={{
                    fontSize: "medium",
                    fontStyle: "italic",
                  }}
                >
                  Upcoming features
                </div>
                <li> Predictive Resource Optimization</li>
              </ul>
            </div>
            <Button variant="primary" className="my-4 px-4 py-2">
              <Link
                href="https://forms.gle/zxCEoSbnnPv6mSX57"
                target="_blank"
                rel="noreferrer"
              >
                Request Access
              </Link>
            </Button>
          </Card>
        </div>
      </div>
      <div className="mt-[6rem] mb-[8rem] px-4">
        <PricingFAQ />
      </div>
    </>
  );
};

export default Pricing;
